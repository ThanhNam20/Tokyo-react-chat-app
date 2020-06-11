const { v4: uuidv4 } = require("uuid");

const createUser = ({ name = "",scoketId =null } = {}) => ({
  id: uuidv4(),
  name,
  scoketId
});

const createMessage = ({ message = "", sender = "" } = {}) => ({
  id: uuidv4(),
  time: getTime(new Date(Date.now())),
  message,
  sender,
});

const getTime = (date) => {
  return `${date.getHours()}:${("0" + date.getMinutes()).slice(-2)}`;
};

const createChat = ({ messages = [], name = "Comunity", users = [] } = {}) => ({
  id: uuidv4(),
  name,
  messages,
  users,
  typingUsers: [],
});

module.exports = {
  createUser,
  createChat,
  createMessage
};
