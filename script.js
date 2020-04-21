var tblTachGhep;
var danhSachLoaiHinhLop = [
    { id: 'CQ', text: 'Chính quy' },
    { id: 'KCQ', text: 'Không Chính quy' },
    { id: 'CLC', text: 'Chất lượng cao' },
];

$(document).ready(function () {

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
        autowidth: false,
        columnDefs: [
            {
                orderable: false,
                searchable: false,
                targets: 0,
                render: function (data, type, full, meta) {
                    return '<input type="checkbox" value="' + $('<div/>').text(data.maMonHoc).html() + '">';
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
            {
                targets: 3,
                render: function (data, type, full, meta) {
                    if (type === 'display') {
                        let select = $('<select></select>', {
                            class: 'form-control',
                        });
                        danhSachLoaiHinhLop.forEach((loaHinhLop) => {
                            let option = $('<option></option>', {
                                text: loaHinhLop.text,
                                value: loaHinhLop.id,
                            });
                            if (data === loaHinhLop.id) {
                                option.attr('selected', 'selected');
                            }
                            select.append(option);
                        });
                        return select.prop('outerHTML');
                    } else {
                        return data;
                    }
                },
            },
            // Các cột input kiểu số
            {
                targets: [4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 27, 28, 30, 31, 32],
                createdCell: function (td, cellData, rowData, row, col) {
                    $(td).attr('data-value', cellData);
                },
                render: function (data, type, full, meta) {
                    if (type === 'display') {
                        let input = $('<input/>', {
                            class: 'form-control input-integer',
                        }).attr('value', data && typeof data === 'number' ? data : null);
                        return input.prop('outerHTML');
                    } else {
                        return data;
                    }
                },
            },
            // Các cột input kiểu chuỗi
            {
                targets: [10, 26, 29],
                createdCell: function (td, cellData, rowData, row, col) {
                    $(td).attr('data-value', cellData);
                },
                render: function (data, type, full, meta) {
                    if (type === 'display') {
                        let input = $('<input/>', {
                            class: 'form-control input-text',
                        }).attr('value', data ? data : null);
                        return input.prop('outerHTML');
                    } else {
                        return data;
                    }
                },
            },
            // Các cột đánh dấu tuần học
            {
                targets: [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64],
                createdCell: function (td, cellData, rowData, row, col) {
                    $(td).attr('data-value', cellData);
                },
                render: function (data, type, full, meta) {
                    if (type === 'display') {
                        let input = $('<input/>', { type: 'checkbox' }).attr('value', true);
                        if (data) {
                            input.attr('checked', true);
                        }
                        return input.prop('outerHTML');
                    } else {
                        return data;
                    }
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
            { data: 'nhomPhong', defaultContent: '--' },
            { data: 'soTietTrongTuan', defaultContent: '--' },
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
				
			>
			<"table-scroll"t>
			<"row"
                <"col-sm-3"i>
                <"col-sm-6"
                    <"#wrap-docs">
                >
				<"col-sm-3"p>
			>`,
    });

    const filterCheckbox = $('.filter-checkbox');
    // Tạo filter cột loại hình lớp
    const filterLoaiHinhLop = filterCheckbox.clone();
    const htmlLoaiHinhLop = danhSachLoaiHinhLop.map((loaHinhLop) => `<li class="allow-focus"><label><input type="checkbox"/> ${loaHinhLop.text}</label></li>`).join('');
    filterLoaiHinhLop.find('.dropdown-menu').prepend(htmlLoaiHinhLop);
    $(tblTachGhep.column(3).footer()).html(filterLoaiHinhLop.prop('outerHTML'));
    // Tạo filter các cột kiểu chuỗi
    const filterText = $('.filter-text');
    $(tblTachGhep.columns([2, 10, 26, 29]).footer()).html(filterText.prop('outerHTML'));
    // Tạo filter các cột thuộc kiểu số
    const filterNumber = $('.filter-number');
    $(tblTachGhep.columns([4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 27, 28, 30, 31, 32]).footer()).html(filterNumber.prop('outerHTML'));
    // Tạo filter các cột đánh dấu tuần học
    const filterTuanHoc = filterCheckbox.clone();
    const htmlTuanHoc = '<li class="allow-focus"><label><input type="checkbox"/> Có</label></li><li class="allow-focus"><label><input type="checkbox"/> Không</label></li>';
    filterTuanHoc.find('.dropdown-menu').prepend(htmlTuanHoc);
    $(tblTachGhep.columns([33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64]).footer()).html(filterTuanHoc.prop('outerHTML'));

    // Sự kiện bỏ điều kiện lọc
    $('#tblTachGhep').on('click', 'tfoot button.clear-filter', function () {
        const parent = $(this).closest('.dropup-filter');
        if (parent.hasClass('filter-text') || parent.hasClass('filter-number')) {
            parent.find('input').val(null);
        } else {
            parent.find(':checkbox').prop('checked', false).trigger('change');
        }
    });
    // Sự kiện kích hoạt điều kiện lọc
    $('#tblTachGhep').on('click', 'tfoot button.apply-filter', function () {
        const parent = $(this).closest('.dropup-filter');
        if (parent.hasClass('filter-text') || parent.hasClass('filter-number')) {
            parent.find('input').val(null);
        }
    });

    // Thêm các control vào bảng
    $('#wrap-funtions').html($('#soDongDuocChon').prop('outerHTML') + $('#dropDownThaoTac').prop('outerHTML') + $('#tuyChonHienThiCot').prop('outerHTML'));
    $('#wrap-docs').html('Ctrl + phím mũi tên để di chuyển giữa các ô');

    // Sự kiện chọn tất cả
    $('#select-all').on('change', function () {
        checkBoxChonTatCaThayDoi();
    });

    // Xử lý sự kiện đóng / mở nhóm lớp
    $('#tblTachGhep tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = tblTachGhep.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            row.child.hide();
            $(this).find('i').addClass('fa-plus-square text-primary').removeClass('fa-minus-square text-success');
        } else {
            // Open this row
            row.child($('#tblNhomLop').prop('outerHTML')).show();
            $(this).find('i').addClass('fa-minus-square text-success').removeClass('fa-plus-square text-primary');
        }
    });

    // Sự kiện đóng/mở tất cả nhóm lớp
    $('#nhomCollapseAll').on('click', function () {
        tblTachGhep.rows(':not(.parent)').nodes().to$().find('td:nth-child(2)').trigger('click');
    });

    // Xử lý sự kiện checkbox ở mỗi dòng thay đổi trạng thái
    $('#tblTachGhep').on('change', 'tbody td input[type="checkbox"]', function () {
        soDongDuocChonThayDoi();
    });

    // Ngăn chặn các input nhập giá trị khác số nguyên
    $('#tblTachGhep').on('keyup', 'input.input-integer', function () {
        let value = this.value;
        value = value.replace(/\D/g, '');
        $(this).val(value);
    });

    $('#tblTachGhep').on('focusout', 'tbody td.editing input', function (e) {
        $(this).trigger(jQuery.Event('keypress', { keyCode: 13 }));
    });

    // Xử lý sự kiện ẩn hiện cột
    $('#tuyChonHienThiCot').on('change', 'input[type="checkbox"]', function () {
        const checkbox = $(this);
        const id = checkbox.attr('id');
        const isChecked = checkbox.prop('checked');
        switch (id) {
            case 'checkTongSoTiet':
                tblTachGhep.column(4).visible(isChecked);
                break;
            case 'checkSiSo':
                tblTachGhep.columns([5, 6, 7, 8, 9]).visible(isChecked);
                break;
            case 'checkChiaTietTKB':
                tblTachGhep.columns([10, 11, 12, 13, 14, 15, 16]).visible(isChecked);
                break;
            case 'checkChiaTiet_PT6_PT14':
                tblTachGhep.columns([17, 18, 19, 20, 21, 22, 23, 24, 25]).visible(isChecked);
                break;
            case 'checkChiDinhGV':
                tblTachGhep.columns([26, 27, 28, 29]).visible(isChecked);
                break;
            case 'checkChiDinhTuan':
                tblTachGhep.columns([30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]).visible(isChecked);
                break;
            case 'checkChiDinhTuan_T16_T32':
                tblTachGhep.columns([48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64]).visible(isChecked);
                break;
            default:
                break;
        }
    });

    // Hot keys
    $('#tblTachGhep').on('keydown', 'input,select', 'ctrl+right', function (e) {
        e.preventDefault();
        const target = $(this).parent().next().children();
        if (target.length > 0) {
            controlFocus(target);
        }
    });
    $('#tblTachGhep').on('keydown', 'input,select', 'ctrl+left', function (e) {
        e.preventDefault();
        const target = $(this).parent().prev().children();
        if (target.length > 0) {
            controlFocus(target);
        }
    });
    $('#tblTachGhep').on('keydown', 'input,select', 'ctrl+up', function (e) {
        e.preventDefault();
        const td = $(this).parent();
        const indexCol = td.index() + 1;
        const trAbove = td.parent('tr').prev();
        const target = trAbove.children('td:nth-child(' + indexCol + ')').children();
        if (target.length > 0) {
            controlFocus(target);
        }
    });
    $('#tblTachGhep').on('keydown', 'input,select', 'ctrl+down', function (e) {
        e.preventDefault();
        const td = $(this).parent();
        const indexCol = td.index() + 1;
        const trAbove = td.parent('tr').next();
        const target = trAbove.children('td:nth-child(' + indexCol + ')').children();
        if (target.length > 0) {
            controlFocus(target);
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
    $('#tuyChonHienThiCot input[type="checkbox"]').prop('checked', true).trigger('change');
    $('#checkChiaTiet_PT6_PT14').prop('checked', false).trigger('change');
    $('#checkChiDinhTuan_T16_T32').prop('checked', false).trigger('change');

    // Xử lý khi các control thay đổi giá trị
    $('#tblTachGhep').on('change', 'tbody td:not(:nth-child(-n+3)) input', function () {
        const jInput = $(this);
        const td = jInput.closest('td');
        let oldValue, newValue;
        if (jInput.is(':checkbox')) {
            oldValue = td.attr('data-value');
            oldValue = oldValue === 'true' ? true : false;
            newValue = jInput.prop('checked');
        } else {
            oldValue = getValue(td.attr('data-value'), null);
            newValue = getValue(this.value, null);
        }
        if (oldValue !== newValue) {
            td.addClass('edited');
        } else {
            td.removeClass('edited');
        }
    });

    // Dropdown checkbox lọc
    $(document).on('click', '.allow-focus', function (e) {
        e.stopPropagation();
    });

    // Sự kiện dropdown thao tác mở
    $(document).on('show.bs.dropdown', '#dropDownThaoTac', function (event) {
        
    });
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
    return '<table class="table table-bordered">' + '<tr>' + '<td>Full name:</td>' + '<td>ABC</td>' + '</tr>' + '<tr>' + '<td>Extension number:</td>' + '<td>DEF</td>' + '</tr>' + '<tr>' + '<td>Extra info:</td>' + '<td>And any further details here (images etc)...</td>' + '</tr>' + '</table>';
}

function controlFocus(target) {
    if (target.is('input')) {
        target.select();
    } else if (target.is('select')) {
        target.focus();
    }
}

function getValue(value, defValue = undefined) {
    if (typeof value !== 'undefined' && value !== null) {
        if (typeof value === 'string' && value.trim() !== '') {
            return value;
        } else {
            return defValue;
        }
    } else {
        return defValue;
    }
}
