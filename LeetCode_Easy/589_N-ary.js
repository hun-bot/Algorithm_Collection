var preorder = function(root) {
	const values = [];

	if (!root) return [];
	
	values.push(root.val);

	root.children.forEach(child => {
		values.push(...preorder(child));
	})

	return values;
};