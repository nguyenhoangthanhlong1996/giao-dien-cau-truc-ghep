var tblTachGhep;

$(document).ready(function () {
    const data = [
        {
            maMonHoc: 'ABC123',
            loaHinhLop: 'Chính quy',
            tongSoTiet: 45,
            siSoToiThieu: 0,
            siSoToiDa: 200,
            siSoDaoDong: 10,
            siSoDuKien: 100,
            siSoThucTe: 150,
            lopThanhPhan: 'Lý thuyết',
            nhom: 'A01',
            siSoNhom: 100,
        },
        {
            maMonHoc: 'ABC123',
            loaHinhLop: 'Chính quy',
            tongSoTiet: 40,
            siSoToiThieu: 0,
            siSoToiDa: 200,
            siSoDaoDong: 10,
            siSoDuKien: 50,
            siSoThucTe: 70,
            lopThanhPhan: 'Lý thuyết',
            nhom: 'A01',
            siSoNhom: 50,
        },
        {
            maMonHoc: 'DEF456',
            loaHinhLop: 'Không Chính quy',
            tongSoTiet: 35,
            siSoToiThieu: 0,
            siSoToiDa: 200,
            siSoDaoDong: 10,
            siSoDuKien: 80,
            siSoThucTe: 60,
            lopThanhPhan: 'Lý thuyết',
            nhom: 'A01',
            siSoNhom: 30,
        },
    ];

    tblTachGhep = $('#tblTachGhep').DataTable({
        // data: data,
        ajax: './data.json',
        language: {
            searchPlaceholder: 'Nhập từ khóa cần tìm (F2)',
        },
        destroy: true,
        lengthMenu: [
            [10, 20, 40, 80, 160, 200, -1],
            [10, 20, 40, 80, 160, 200, 'Tất cả'],
        ],
        order: [[2, 'asc']],
        scrollX: true,
        scrollY: '400px',
        scrollCollapse: true,
        // fixedColumns: {
        //     leftColumns: 3
        // },
        columnDefs: [
            {
                orderable: false,
                searchable: false,
                className: 'select',
                targets: 0,
                render: function (data, type, full, meta) {
                    return (
                        '<input type="checkbox" value="' +
                        $('<div/>').text(data.maMonHoc).html() +
                        '">'
                    );
                },
            },
            {
                orderable: false,
                searchable: false,
                targets: 1,
                render: function (data, type, full, meta) {
                    return `<i class="fa fa-2x fa-plus-square text-primary" aria-hidden="true"></i>`;
                },
            },
            {
                targets: 2,
                render: function (data, type, full, meta) {
                    return full.maMonHoc + ' - ' + full.tenMonHoc;
                },
            },
        ],
        rowId: 'id',
        columns: [
            { data: null, defaultContent: '--' },
            { data: null, defaultContent: '--', className: 'details-control' },
            { data: 'maMonHoc', defaultContent: '--' },
            { data: 'loaiHinhLop', defaultContent: '--' },
            { data: 'tongSoTiet', defaultContent: '--' },
            { data: 'siSoToiThieu', defaultContent: '--' },
            { data: 'siSoToiDa', defaultContent: '--' },
            { data: 'siSoDaoDong', defaultContent: '--' },
            { data: 'siSoDuKien', defaultContent: '--' },
            { data: 'siSoThucTe', defaultContent: '--' },
            { data: 'soTietTrongTuan', defaultContent: '--' },
            { data: 'nhomPhong', defaultContent: '--' },
            { data: 'PT1', defaultContent: '--' },
            { data: 'PT2', defaultContent: '--' },
            { data: 'PT3', defaultContent: '--' },
            { data: 'PT4', defaultContent: '--' },
            { data: 'PT5', defaultContent: '--' },
            { data: 'PT6', defaultContent: '--' },
            { data: 'PT7', defaultContent: '--' },
            { data: null, defaultContent: '--' },
            { data: null, defaultContent: '--' },
            { data: null, defaultContent: '--' },
            { data: null, defaultContent: '--' },
            { data: null, defaultContent: '--' },
            { data: null, defaultContent: '--' },
            { data: null, defaultContent: '--' },
            { data: 'maGiangVien', defaultContent: '--' },
            { data: 'thu', defaultContent: '--' },
            { data: 'tietBatDau', defaultContent: '--' },
            { data: 'maPhong', defaultContent: '--' },
            { data: 'tuanBatDau', defaultContent: '--' },
            { data: 'tuanKetThuc', defaultContent: '--' },
            { data: null, defaultContent: '--' },
            { data: 'T1', defaultContent: '--' },
            { data: 'T2', defaultContent: '--' },
            { data: 'T3', defaultContent: '--' },
            { data: 'T4', defaultContent: '--' },
            { data: 'T5', defaultContent: '--' },
            { data: 'T6', defaultContent: '--' },
            { data: 'T7', defaultContent: '--' },
            { data: 'T8', defaultContent: '--' },
            { data: 'T9', defaultContent: '--' },
            { data: 'T10', defaultContent: '--' },
            { data: 'T11', defaultContent: '--' },
            { data: 'T12', defaultContent: '--' },
            { data: 'T13', defaultContent: '--' },
            { data: 'T14', defaultContent: '--' },
            { data: 'T15', defaultContent: '--' },
            { data: null, defaultContent: '--' },
            { data: null, defaultContent: '--' },
            { data: null, defaultContent: '--' },
            { data: null, defaultContent: '--' },
            { data: null, defaultContent: '--' },
            { data: null, defaultContent: '--' },
            { data: null, defaultContent: '--' },
            { data: null, defaultContent: '--' },
            { data: null, defaultContent: '--' },
            { data: null, defaultContent: '--' },
            { data: null, defaultContent: '--' },
            { data: null, defaultContent: '--' },
            { data: null, defaultContent: '--' },
            { data: null, defaultContent: '--' },
            { data: null, defaultContent: '--' },
            { data: null, defaultContent: '--' },
            { data: null, defaultContent: '--' },
        ],
        dom: `<"flex-wrap-controls"
				l
				<"#wrap-funtions">
				f
			>
			<"row"
				<"col-sm-12"t>
			>
			<"row"
				<"col-sm-6"i>
				<"col-sm-6"p>
			>`,
    });

    $('#wrap-funtions').html(
        $('#soDongDuocChon').prop('outerHTML') +
            $('#dropDownThaoTac').prop('outerHTML') +
            $('#tuyChonHienThiCot').prop('outerHTML')
    );

    $('#select-all').on('change', function () {
        checkBoxChonTatCaThayDoi();
    });

    $('#tblTachGhep tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = tblTachGhep.row(tr);
 
        if ( row.child.isShown() ) {
            // This row is already open - close it
            row.child.hide();
            $(this).find('i').addClass('fa-plus-square text-primary').removeClass('fa-minus-square text-success');
        }
        else {
            // Open this row
            row.child($('#tblNhomLop').prop('outerHTML')).show();
            $(this).find('i').addClass('fa-minus-square text-success').removeClass('fa-plus-square text-primary');
        }
    });

    // Xử lý sự kiện checkbox ở mỗi dòng thay đổi trạng thái
    $('#tblTachGhep').on(
        'change',
        'tbody td input[type="checkbox"]',
        function () {
            soDongDuocChonThayDoi();
        }
    );

    // Xử lý sự kiện ẩn hiện cột
    $('#tuyChonHienThiCot').on('change', 'input[type="checkbox"]', function () {
        const checkbox = $(this);
        const value = checkbox.val();
        const isChecked = checkbox.prop('checked');
        switch (value) {
            case 'tongSoTiet':
                tblTachGhep.column(4).visible(isChecked);
                break;
            case 'siSo':
                tblTachGhep.columns([5, 6, 7, 8, 9]).visible(isChecked);
                break;
            case 'chiaTietTKB':
                tblTachGhep
                    .columns([
                        10,
                        11,
                        12,
                        13,
                        14,
                        15,
                        16,
                        17,
                        18,
                        19,
                        20,
                        21,
                        22,
                        23,
                        24,
                        25
                    ])
                    .visible(isChecked);
                break;
            case 'chiDinhGV':
                tblTachGhep.columns([26, 27, 28, 29]).visible(isChecked);
                break;
            case 'chiDinhTuan':
                tblTachGhep
                    .columns([
                        30,
                        31,
                        32,
                        33,
                        34,
                        35,
                        36,
                        37,
                        38,
                        39,
                        40,
                        41,
                        42,
                        43,
                        44,
                        45,
                        46,
                        47,
                        48,
                        49,
                        50,
                        51,
                        52,
                        53,
                        54,
                        55,
                        56,
                        57,
                        58,
                        59,
                        60,
                        61,
                        62,
                        63,
                        64
                    ])
                    .visible(isChecked);
                break;
            default:
                break;
        }
    });

    $(document).bind('keydown', 'ctrl+a', function (e) {
        e.preventDefault();
        $('#select-all').prop('checked', true).trigger('change');
    });
    $(document).bind('keydown', 'ctrl+shift+a', function (e) {
        e.preventDefault();
        $('#select-all').prop('checked', false).trigger('change');
    });

    $(document).bind('keydown', function (e) {
        const key = e.key;
        if (['F1', 'F2', 'F3', 'Delete', 'F4', 'F6', 'F7'].includes(key)) {
            e.preventDefault();
            switch (key) {
                case 'F1':
                    $('#dropDownThaoTac').toggleClass('open');
                    $('#dropDownThaoTac button').focus();
                    break;
                case 'F2':
                    $('.dataTables_filter input[type="search"]').focus();
                    break;
            }
        }
    });

    // Mặc định hiển thị tất cả cột
    $('#tuyChonHienThiCot input[type="checkbox"]').prop('checked', true);
});

function soDongDuocChonThayDoi() {
    $('#soDongDuocChon .giaTri').html(
        tblTachGhep
            .rows(function (index, data, node) {
                return $(node).find('td.select input:checked').length > 0;
            })
            .nodes().length
    );
}

function checkBoxChonTatCaThayDoi() {
    const isCheckedAll = $('#select-all').prop('checked');
    const rows = tblTachGhep.rows({ search: 'applied' }).nodes();
    $('input[type="checkbox"]', rows).prop('checked', isCheckedAll);
    soDongDuocChonThayDoi();
}

function htmlBangNhomLop(id) {
    return '<table class="table table-bordered">'+
        '<tr>'+
            '<td>Full name:</td>'+
            '<td>ABC</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Extension number:</td>'+
            '<td>DEF</td>'+
        '</tr>'+
        '<tr>'+
            '<td>Extra info:</td>'+
            '<td>And any further details here (images etc)...</td>'+
        '</tr>'+
    '</table>';
}