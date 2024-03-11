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
                        return '<img src="assets/images/' + data + '" alt="' + row.Name + '">';
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
