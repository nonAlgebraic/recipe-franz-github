module.exports = Franz => {
  const getNotifications = () => {
    Franz.setBadge(0, document.querySelector('.mail-status.unread') ? 1 : null);
  };

  Franz.loop(getNotifications);
};
