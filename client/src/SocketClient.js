import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { POST_TYPES } from "./redux/actions/postAction";
import { ADMIN_TYPES } from "./redux/actions/adminAction";
import { GLOBALTYPES } from "./redux/actions/globalTypes";
import { NOTIFY_TYPES } from "./redux/actions/notifyAction";
import { MESSAGE_TYPES } from "./redux/actions/messageAction";

import audioTone from './audio/pristine-609.mp3';

const spawnNotification = (body, icon, url, title) => {
  let options = {
    body, icon
  };
  let n = new Notification(title, options);
  n.onclick = e => {
    e.preventDefault();
    window.open(url, '_blank');
  };
};

const SocketClient = () => {
  const { auth, socket, notify } = useSelector((state) => state);
  const dispatch = useDispatch();

  const audioRef = useRef();

  // Join user/admin room
  useEffect(() => {
    if (auth.user.role === "user") {
      socket.emit("joinUser", auth.user._id);
    } else if (auth.user.role === "admin") {
      socket.emit("joinAdmin", auth.user._id);
    }
  }, [socket, auth.user.role, auth.user._id]);

  // Get total active users
  useEffect(() => {
    socket.on("getActiveUsersToClient", (totalActiveUsers) => {
      dispatch({
        type: ADMIN_TYPES.GET_TOTAL_ACTIVE_USERS,
        payload: totalActiveUsers,
      });
    });
    return () => socket.off("getActiveUsersToClient");
  }, [socket, dispatch]);

  // Like post
  useEffect(() => {
    socket.on("likeToClient", (newPost) => {
      dispatch({ type: POST_TYPES.UPDATE_POST, payload: newPost });
    });
    return () => socket.off("likeToClient");
  }, [socket, dispatch]);

  // Unlike post
  useEffect(() => {
    socket.on("unLikeToClient", (newPost) => {
      dispatch({ type: POST_TYPES.UPDATE_POST, payload: newPost });
    });
    return () => socket.off("unLikeToClient");
  }, [socket, dispatch]);

  // Create comment
  useEffect(() => {
    socket.on("createCommentToClient", (newPost) => {
      dispatch({ type: POST_TYPES.UPDATE_POST, payload: newPost });
    });
    return () => socket.off("createCommentToClient");
  }, [socket, dispatch]);

  // Delete comment
  useEffect(() => {
    socket.on("deleteCommentToClient", (newPost) => {
      dispatch({ type: POST_TYPES.UPDATE_POST, payload: newPost });
    });
    return () => socket.off("deleteCommentToClient");
  }, [socket, dispatch]);

  // Follow
  useEffect(() => {
    socket.on("followToClient", (newUser) => {
      dispatch({ type: GLOBALTYPES.AUTH, payload: { ...auth, user: newUser } });
    });
    return () => socket.off("followToClient");
  }, [socket, dispatch, auth]);

  // Unfollow
  useEffect(() => {
    socket.on("unFollowToClient", (newUser) => {
      dispatch({
        type: GLOBALTYPES.AUTH,
        payload: { ...auth, user: newUser },
      });
    });
    return () => socket.off("unFollowToClient");
  }, [socket, dispatch, auth]);

  // Create notification
  useEffect(() => {
    socket.on("createNotifyToClient", (msg) => {
      dispatch({ type: NOTIFY_TYPES.CREATE_NOTIFY, payload: msg });

      if (notify.sound) {
        audioRef.current.play();
      }
      spawnNotification(
        msg.user.username + " " + msg.text,
        msg.user.avatar,
        msg.url,
        "CAMPUS CONNECT"
      );
    });
    return () => socket.off("createNotifyToClient");
  }, [socket, dispatch, notify.sound]);

  // Remove notification
  useEffect(() => {
    socket.on("removeNotifyToClient", (msg) => {
      dispatch({ type: NOTIFY_TYPES.REMOVE_NOTIFY, payload: msg });
    });
    return () => socket.off("removeNotifyToClient");
  }, [socket, dispatch]);

  // Add message
  useEffect(() => {
    socket.on("addMessageToClient", (msg) => {
      dispatch({ type: MESSAGE_TYPES.ADD_MESSAGE, payload: msg });
    });
    return () => socket.off("addMessageToClient");
  }, [socket, dispatch]); // ✅ Fixed dependency warning

  return (
    <>
      <audio controls ref={audioRef} style={{ display: "none" }}>
        <source src={audioTone} type="audio/mp3" />
      </audio>
    </>
  );
};

export default SocketClient;

