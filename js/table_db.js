/**
 * TableContent
 * @param  {object} obj 해당 테이블 객체
 */
var TableContent = function (obj){
    this.contents = obj;
};

/**
 * tableContent에 prototype으로 getTable 메서드 추가
 * 가져온 객체를 이용해서 view 형성
 * @param  {string} target 형성되어야 할 장소 테이블 ID 값
 */
TableContent.prototype.getTable = function(target) {
    var i,
        _row = '',
        _length = this.contents.length; //따로 값을 지정해서 추가한 프로퍼티(메서드)는 배열에 할당은 되지만 length 프로퍼티값에 영향을 주지는 않는다.

    for(i=0; i<_length; i++) {
        _row += '<li class="table-row">\n';
        _row += '   <div class="table-title">'+ this.contents[i].title +'</div>\n';
        _row += '   <div class="table-content">'+ this.contents[i].content +'</div>\n';
        _row += '</li>\n';
    }

    //출력
    document.getElementById(target).innerHTML = _row;
};

/**
 * 테이블 DB 테스트
 * @type {Array}
 */
var table001 = [
    {
        title: '사업명',
        content: '2017 완도국제해조류 박람회 수출상담회'
    },
    {
        title: '사업회 유형',
        content: '1:1 수출상담회'
    },
    {
        title: '개최일시개최일시개최일시개최일시개최일시',
        content: '<span class="layout-block">2017-04-02 10:00</span> ~ <span class="layout-block">2017-04-20 18:00</span>'
    },
    {
        title: '장소',
        content: '완도농어민문화체육센터'
    },
    {
        title: '규모',
        content: '바이어 40명'
    },
    {
        title: '지원사항',
        content: '상담매칭 및 부스제공'
    },
    {
        title: '상담회가이드북',
        content: 'guide_book.pdf'
    }
];

/**
 * 테이블 DB 테스트
 * @type {Array}
 */
var table002 = [
    {
        title: '모집대상',
        content: '국내 해조류 및 수산물 수출업체'
    },
    {
        title: '상담품목',
        content: '1:1 수출상담회'
    },
    {
        title: '주최/주관괴관',
        content: '완도군/한국농수산식품유통공사'
    }
];
