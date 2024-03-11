$(document).ready(function() {
    $('#dataTable').DataTable({
        "ajax": {
            "url": "assets/json/table_data.json",
            "dataSrc": ""
        },
        "columns": [
            { "data": "Position", "visible": false},
            { "data": "Name" },
            {
                "data": "Image",
                "render": function(data, type, row) {
                    if (type === 'display') {
                        return '<img src="assets/images/' + data + '" alt="' + row.Name + '" loading="lazy">';
                    }
                    return data;
                }
            },
            { "data": "Rarity" },
            { "data": "Type" },
            { "data": "Unlock Requirement" },
            { "data": "Effect" },
            {
                "data": "Tags",
                "render": function(data) {
                    return Array.isArray(data) ? data.join(', ') : '';
                }
            }
        ],
        "order": [[0, "asc"]],
        "pageLength": 150,
        "lengthChange": false,
        "paging": false,
        "info": false
    });

    $('#searchInput').on('keyup', function() {
        $('#dataTable').DataTable().search($(this).val()).draw();
    });

    $('#rarityFilter').on('change', function() {
        var selectedRarity = $(this).val();
        if (selectedRarity === 'all') {
            $('#dataTable').DataTable().column(1).search('').draw();
        } else {
            $('#dataTable').DataTable().column(1).search(selectedRarity).draw();
        }
    });
});

btnSwitch.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-bs-theme') === 'dark';
    document.documentElement.setAttribute('data-bs-theme', isDark ? 'light' : 'dark');
    btnSwitch.innerHTML = isDark ? '<i class="fa-solid fa-moon"></i>' : '<i class="fa-solid fa-sun"></i>';
    
    btnSwitch.classList.remove(isDark ? "text-dark" : "text-light", isDark ? "btn-light" : "btn-dark");
    btnSwitch.classList.add(isDark ? "text-light" : "text-dark", isDark ? "btn-dark" : "btn-light");
});