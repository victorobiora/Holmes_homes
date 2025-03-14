export const formatDate = (date) => {
	const messageDate = new Date(date);
	const today = new Date();
	const yesterday = new Date(today);
	yesterday.setDate(today.getDate() - 1);

	if (messageDate.toDateString() === today.toDateString()) {
		return `Today, ${messageDate.toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit",
		})}`;
	} else if (messageDate.toDateString() === yesterday.toDateString()) {
		return `Yesterday, ${messageDate.toLocaleDateString()}`;
	} else {
		return messageDate.toLocaleDateString();
	}
};
