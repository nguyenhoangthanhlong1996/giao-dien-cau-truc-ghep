var tblCauTrucGhep = null;
var pluginHiddenColumns = null;

$(document).ready(function () {
    $.ajax({
        dataType: 'json',
        url: './data.json',
        success: function ({ data }) {
            tblCauTrucGhep = new Handsontable($('#tblCauTrucGhep').get(0), {
                data: data,
                colHeaders: true,
                rowHeaders: true,
                nestedHeaders: [
                    [
                        '',
                        '',
                        '',
                        '',
                        { label: 'Sĩ số', colspan: 5 },
                        { label: 'Chi tiết TKB', colspan: 16 },
                        { label: 'Chỉ định Giảng viên', colspan: 4 },
                        { label: 'Chỉ định tuần học', colspan: 34 },
                    ],
                    [
                        'Mã môn học',
                        'Tên môn học',
                        'Loại hình lớp',
                        'Tổng số tiết',
                        'Tối thiểu',
                        'Tối đa',
                        'Dao động',
                        'Dự kiến',
                        'Thực tế',
                        'Nhóm phòng',
                        'Tiết / Tuần',
                        'PT1',
                        'PT2',
                        'PT3',
                        'PT4',
                        'PT5',
                        'PT6',
                        'PT7',
                        'PT8',
                        'PT9',
                        'PT10',
                        'PT11',
                        'PT12',
                        'PT13',
                        'PT14',
                        'Mã GV',
                        'Thứ',
                        'Tiết BĐ',
                        'Mã phòng',
                        'Tuần BĐ',
                        'Tuần KT',
                        'T1',
                        'T2',
                        'T3',
                        'T4',
                        'T5',
                        'T6',
                        'T7',
                        'T8',
                        'T9',
                        'T10',
                        'T11',
                        'T12',
                        'T13',
                        'T14',
                        'T15',
                        'T16',
                        'T17',
                        'T18',
                        'T19',
                        'T20',
                        'T21',
                        'T22',
                        'T23',
                        'T24',
                        'T25',
                        'T26',
                        'T27',
                        'T28',
                        'T29',
                        'T30',
                        'T31',
                        'T32',
                    ],
                ],
                hiddenColumns: {
                    columns: [],
                    indicators: true,
                },
                autoRowSize: false,
                autoColumnSize: false,
                viewportColumnRenderingOffset: 35,
                viewportRowRenderingOffset: 100,
                fixedColumnsLeft: 3,
                minSpareRows: 1,
                filters: true,
                dropdownMenu: true,
                contextMenu: {
                    items: {
                        undo: { name: 'Hoàn tác' },
                        redo: { name: 'Làm lại' },
                        alignment: { name: 'Căn lề' },
                        cut: { name: 'Cắt' },
                        copy: { name: 'Sao chép' },
                        separator: Handsontable.plugins.ContextMenu.SEPARATOR,
                        item1: {
                            name: 'Đổi môn học',
                            hidden: function() {
                                console.log(this);
                                return false;
                            },
                            callback: function () {
                                console.log('doi ten');
                            },
                        },
                    },
                },
                allowInsertColumn: false,
                allowInsertRow: false,
                allowRemoveColumn: false,
                allowRemoveRow: false,
                trimWhitespace: true,
                columnSorting: true,
                width: '100%',
                height: '600px',
                colWidths: [
                    120,
                    200,
                    120,
                    120,
                    90,
                    90,
                    90,
                    90,
                    90,
                    120,
                    110,
                    75,
                    75,
                    75,
                    75,
                    75,
                    75,
                    75,
                    75,
                    75,
                    75,
                    75,
                    75,
                    75,
                    75,
                    90,
                    70,
                    95,
                    100,
                    95,
                    95,
                    65,
                    65,
                    65,
                    65,
                    65,
                    65,
                    65,
                    65,
                    65,
                    65,
                    65,
                    65,
                    65,
                    65,
                    65,
                    65,
                    65,
                    65,
                    65,
                    65,
                    65,
                    65,
                    65,
                    65,
                    65,
                    65,
                    65,
                    65,
                    65,
                    65,
                    65,
                    65,
                ],
                columns: [
                    { data: 'maMonHoc' },
                    { data: 'tenMonHoc', readOnly: true },
                    {
                        data: 'loaiHinhLop',
                        type: 'dropdown',
                        source: ['CQ', 'KCQ', 'CLC'],
                    },
                    { data: 'tongSoTiet', type: 'numeric', allowEmpty: true },
                    { data: 'siSoToiThieu', type: 'numeric', allowEmpty: true },
                    { data: 'siSoToiDa', type: 'numeric', allowEmpty: true },
                    { data: 'siSoDaoDong', type: 'numeric', allowEmpty: true },
                    { data: 'siSoDuKien', type: 'numeric', allowEmpty: true },
                    { data: 'siSoThucTe', type: 'numeric', allowEmpty: true },
                    { data: 'nhomPhong' },
                    { data: 'soTietTrongTuan', type: 'numeric', allowEmpty: true },
                    { data: 'PT1', type: 'numeric', allowEmpty: true },
                    { data: 'PT2', type: 'numeric', allowEmpty: true },
                    { data: 'PT3', type: 'numeric', allowEmpty: true },
                    { data: 'PT4', type: 'numeric', allowEmpty: true },
                    { data: 'PT5', type: 'numeric', allowEmpty: true },
                    { data: 'PT6', type: 'numeric', allowEmpty: true },
                    { data: 'PT7', type: 'numeric', allowEmpty: true },
                    { data: 'PT8', type: 'numeric', allowEmpty: true },
                    { data: 'PT9', type: 'numeric', allowEmpty: true },
                    { data: 'PT10', type: 'numeric', allowEmpty: true },
                    { data: 'PT11', type: 'numeric', allowEmpty: true },
                    { data: 'PT12', type: 'numeric', allowEmpty: true },
                    { data: 'PT13', type: 'numeric', allowEmpty: true },
                    { data: 'PT14', type: 'numeric', allowEmpty: true },
                    { data: 'maGiangVien', allowEmpty: true },
                    { data: 'thu', type: 'numeric', allowEmpty: true },
                    { data: 'tietBatDau', type: 'numeric', allowEmpty: true },
                    { data: 'maPhong', allowEmpty: true },
                    { data: 'tuanBatDau', type: 'numeric', allowEmpty: true },
                    { data: 'tuanKetThuc', type: 'numeric', allowEmpty: true },
                    { data: 'T1', type: 'checkbox', className: 'htCenter' },
                    { data: 'T2', type: 'checkbox', className: 'htCenter' },
                    { data: 'T3', type: 'checkbox', className: 'htCenter' },
                    { data: 'T4', type: 'checkbox', className: 'htCenter' },
                    { data: 'T5', type: 'checkbox', className: 'htCenter' },
                    { data: 'T6', type: 'checkbox', className: 'htCenter' },
                    { data: 'T7', type: 'checkbox', className: 'htCenter' },
                    { data: 'T8', type: 'checkbox', className: 'htCenter' },
                    { data: 'T9', type: 'checkbox', className: 'htCenter' },
                    { data: 'T10', type: 'checkbox', className: 'htCenter' },
                    { data: 'T11', type: 'checkbox', className: 'htCenter' },
                    { data: 'T12', type: 'checkbox', className: 'htCenter' },
                    { data: 'T13', type: 'checkbox', className: 'htCenter' },
                    { data: 'T14', type: 'checkbox', className: 'htCenter' },
                    { data: 'T15', type: 'checkbox', className: 'htCenter' },
                    { data: 'T16', type: 'checkbox', className: 'htCenter' },
                    { data: 'T17', type: 'checkbox', className: 'htCenter' },
                    { data: 'T18', type: 'checkbox', className: 'htCenter' },
                    { data: 'T19', type: 'checkbox', className: 'htCenter' },
                    { data: 'T20', type: 'checkbox', className: 'htCenter' },
                    { data: 'T21', type: 'checkbox', className: 'htCenter' },
                    { data: 'T22', type: 'checkbox', className: 'htCenter' },
                    { data: 'T23', type: 'checkbox', className: 'htCenter' },
                    { data: 'T24', type: 'checkbox', className: 'htCenter' },
                    { data: 'T25', type: 'checkbox', className: 'htCenter' },
                    { data: 'T26', type: 'checkbox', className: 'htCenter' },
                    { data: 'T27', type: 'checkbox', className: 'htCenter' },
                    { data: 'T28', type: 'checkbox', className: 'htCenter' },
                    { data: 'T29', type: 'checkbox', className: 'htCenter' },
                    { data: 'T30', type: 'checkbox', className: 'htCenter' },
                    { data: 'T31', type: 'checkbox', className: 'htCenter' },
                    { data: 'T32', type: 'checkbox', className: 'htCenter' },
                ],
                licenseKey: 'non-commercial-and-evaluation',
            });
            pluginHiddenColumns = tblCauTrucGhep.getPlugin('hiddenColumns');

            // Mặc định hiển thị tất cả cột
            $('#tuyChonHienThiCot input[type="checkbox"]').prop('checked', true).trigger('change');
            // $('#checkChiaTiet_PT6_PT14').prop('checked', false).trigger('change');
            // $('#checkChiDinhTuan_T16_T32').prop('checked', false).trigger('change');

            tblCauTrucGhep.render();
        },
    });

    // Xử lý sự kiện ẩn hiện cột
    $('#tuyChonHienThiCot').on('change', 'input[type="checkbox"]', function () {
        const checkbox = $(this);
        const id = checkbox.attr('id');
        const isChecked = checkbox.prop('checked');
        let columns = [];
        switch (id) {
            case 'checkTongSoTiet':
                columns = [3];
                break;
            case 'checkSiSo':
                columns = [4, 5, 6, 7, 8];
                break;
            case 'checkChiaTietTKB':
                columns = [9, 10, 11, 12, 13, 14];
                break;
            case 'checkChiaTiet_PT6_PT14':
                columns = [15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
                break;
            case 'checkChiDinhGV':
                columns = [25, 26, 27, 28];
                break;
            case 'checkChiDinhTuan':
                columns = [29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
                break;
            case 'checkChiDinhTuan_T16_T32':
                columns = [46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62];
                break;
            default:
                break;
        }
        pluginHiddenColumns[isChecked ? 'showColumns' : 'hideColumns'](columns);
        tblCauTrucGhep.render();
    });
});
