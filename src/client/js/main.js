import "../scss/styles.scss";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
import "jquery-ui/ui/widgets/sortable";

$( function() {
    // list title 변경
    $(document).on('dblclick', ".title", function (e) {
        e.preventDefault();
        let ltTitleEdit = $(this).parent().children(".titleEdit");
        ltTitleEdit.children(".listTitle").val($(this).html());
        ltTitleEdit.children(".listTitle").focus();
        $(this).hide();
        ltTitleEdit.show();
    });
    $(document).on("submit", ".titleEdit", function (e) {
        e.preventDefault();
        let ltTitle = $(this).parent().children(".title");
        let title = $(this).children(".listTitle").val();
        ltTitle.html(title);
        $(this).hide();
        ltTitle.show();
    });

    // card 추가를 위한 코드
    // .addLabel 클릭 시 입력할 수 있는 form을 생성
    $(document).on("click", ".addLabel", function (e) {
        e.preventDefault();
        $(this).hide();
        $(this).parent().children("form").show();
        $(this).parent().children("form").children("input").focus();
    });

    // form에 입력한 내용을 card에 add
    $(document).on("submit", ".addCard", function (e) {
        e.preventDefault();
        let addCardLabel = $(this).parent().children(".addLabel");
        let content = $(this).children(".addCardContent");
        if (content.val().length > 0) {
            $(this).parents(".list").children(".cardWrap").append(`<div class="cardContent">${content.val()}</div>`);
        }
        content.val("");
        $(this).hide();
        addCardLabel.show();
        // 새로 생긴 카드도 이동 가능하게끔 설정
        $( function() {
            $(".cardWrap").sortable({
                connectWith: ".cardWrap", // 자식 엘리먼트(cardContent)를 이동
                placeholder: "card-placeholder" // 이동할 위치 css 적용
            }).disableSelection();
        });
    });

    $(document).on("click", ".addCardBtn", function (e) {
        e.preventDefault();
        $(this).parent(".addCard").submit();
    });

    // addCardBtn 옆 x 누를 시 내용 지우고 form을 닫고 원래 addLabel을 노출
    $(document).on("click", ".addCardClose", function (e) {
        e.preventDefault();
        $(this).parents(".addCard").children(".addCardContent").val("");
        $(this).parents(".addCard").hide();
        $(this).parents(".cardAddWrap").children(".addLabel").show();
    });

    // list 추가를 위한 코드
    // .addLabel 클릭 시 입력할 수 있는 form을 생성
    $(document).on("click", ".addLabel", function (e) {
        e.preventDefault();
        $(this).hide();
        $(this).parent().children("form").show();
        $(this).children(".addListTitle").focus();
    });

    // form에 입력한 내용을 list에 add
    $(document).on("submit", ".addList", function (e) {
        e.preventDefault();
        let listTitle = $(".addListTitle");
        let addListLabel = $(".addLabel");
        let addListForm = $(".addList");
        if (listTitle.val().length > 0) {
            $(".listWrap").append(
                `<div class="list">
                    <div class="listTitleWrap">
                        <div class="title">${listTitle.val()}</div>
                        <form class="titleEdit">
                            <input class="listTitle" type="text" placeholder="list", autocomplete="off">
                        </form>
                    </div>
                    <div class="cardWrap"></div>
                    <div class="cardAddWrap">
                        <div class="addLabel">+ Add another card</div>
                        <form class="addCard">
                            <input class="addCardContent" type="text", placeholder="card", autocomplete="off">
                            <button class="btn addCardBtn">Add Card</button>
                            <span class="close addCardClose">&times</span>
                        </form>
                    </div>
                </div>`);
        }
        listTitle.val("");
        addListForm.hide();
        addListLabel.show();
        // 새로 생긴 카드도 이동 가능하게끔 설정
        $( function() {
            $(".cardWrap").sortable({
                connectWith: ".cardWrap", // 자식 엘리먼트(cardContent)를 이동
                placeholder: "card-placeholder" // 이동할 위치 css 적용
            }).disableSelection();
        });
    });

    // addListBtn 옆 x 누를 시 내용 지우고 form을 닫고 원래 addLabel을 노출
    $(".addListClose").click(function (e) {
        $(".addListTitle").val("");
        $(this).parents(".addList").hide();
        $(this).parents(".listAddWrap").children(".addLabel").show();
    });

    // 리스트 이동
    $( function() {
        $(".listWrap").sortable({
            placeholder: "list-placeholder", // 이동할 위치 css 적용
            handle: ".listTitleWrap", // 이동할 엘리먼트
        }).disableSelection();
    });

    // 카드 이동
    $( function() {
        $(".cardWrap").sortable({
            connectWith: ".cardWrap", // 자식 엘리먼트(cardContent)를 이동
            placeholder: "card-placeholder" // 이동할 위치 css 적용
        }).disableSelection();
    });
});