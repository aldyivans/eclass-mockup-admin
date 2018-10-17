function openSidebar() {
	var x = document.getElementById('sideBar');
	var y = document.getElementById('sidebarMenu');

	if (y.style.width == '70%' && x.style.display == 'block') {
		x.style.display = 'none';
		y.style.width = '0px';
	} else {
		x.style.display = 'block';
		y.style.width = '70%';
	}
}
//# sourceMappingURL=sidebar.js.map
