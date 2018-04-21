// 记录移动位置
var puzzleList = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 0]];
// 记录移动后ID
var successList = [
    ["0_0", "1_0", "2_0"],
    ["0_1", "1_1", "2_1"],
    ["0_2", "1_2", "2_2"]];
// 记录成功结果
var successList_s = [
    ["0_0", "1_0", "2_0"],
    ["0_1", "1_1", "2_1"],
    ["0_2", "1_2", "2_2"]];
// 记录当前步数
var num = 0;
// 移动拼图
function ChangePosition(id) {

    var x =parseInt($("#"+id).attr("data-x"));
    var y = parseInt($("#" + id).attr("data-y"));

    var x_t = 0;
    var y_t = 0;

    // 验证是否可以移动
    var isMove = false;
    var MoveID = "";
    var MoveID2 = successList[y][x];
    var MoveID_T = "";

    // 移动的中间变量
    var top_t = "";
    var left_t = "";

    // 右移
    if ((x + 1) <= 2 && puzzleList[y][x + 1] == 0) {
        MoveID = successList[y][(x + 1)];
        puzzleList[y][x] = 0;
        puzzleList[y][x + 1] = 1;

        MoveID_T = successList[y][(x + 1)];
        successList[y][(x + 1)] = successList[y][x];
        successList[y][x] = MoveID_T;
    }
    // 左移
    else if ((x - 1) >= 0 && puzzleList[y][x - 1] == 0) {
        MoveID = successList[y][(x - 1)];
        puzzleList[y][x] = 0;
        puzzleList[y][x - 1] = 1;

        MoveID_T = successList[y][(x - 1)];
        successList[y][(x - 1)] = successList[y][x];
        successList[y][x] = MoveID_T;
    }
    // 下移
    else if ((y + 1) <= 2 && puzzleList[y + 1][x] == 0) {
        MoveID = successList[(y + 1)][x];
        puzzleList[y][x] = 0;
        puzzleList[y + 1][x] = 1;

        MoveID_T = successList[(y + 1)][x];
        successList[(y + 1)][x] = successList[y][x];
        successList[y][x] = MoveID_T;
    }
    // 上移
    else if ((y - 1) >= 0 && puzzleList[y - 1][x] == 0) {
        MoveID = successList[(y - 1)][x];
        puzzleList[y][x] = 0;
        puzzleList[y - 1][x] = 1;

        MoveID_T = successList[(y - 1)][x];
        successList[(y - 1)][x] = successList[y][x];
        successList[y][x] = MoveID_T;
    }

    if (MoveID.length > 0) {
        isMove = true;
    }

    if (isMove) {
        top_t = $("#" + MoveID).css("top");
        left_t = $("#" + MoveID).css("left");
        x_t = $("#" + MoveID).attr("data-x");
        y_t = $("#" + MoveID).attr("data-y");
        


        $("#" + MoveID).css("top", $("#" + MoveID2).css("top"));
        $("#" + MoveID).css("left", $("#" + MoveID2).css("left"));
        $("#" + MoveID).attr("data-x", $("#" + MoveID2).attr("data-x"));
        $("#" + MoveID).attr("data-y", $("#" + MoveID2).attr("data-y"));

        $("#" + MoveID2).css("top", top_t);
        $("#" + MoveID2).css("left", left_t);
        $("#" + MoveID2).attr("data-x", x_t);
        $("#" + MoveID2).attr("data-y", y_t);
		 num=num+1;
		 $("#lblNum").text(num);
    }
}

// 拼图点击：移动拼图，并验证成功
function moveImg(id) {
    ChangePosition(id);
    var isSuccess = true;
   
    
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (successList[i][j] != successList_s[i][j]) {
                isSuccess = false;
                return;
            }
        }
    }
    
    if (isSuccess) {
        setTimeout(function(){ alert("恭喜您通关，您一共使用了"+num+"步！")},500);
    }
}

function Upset() {
    num = 0;
    $("#lblNum").text(num);
    // 初始化正确位置
    InitPostion();

    // 初始化第一张要打乱的图片
    var x = 0, y = 0;

    var id = "";
    for (var i = 0; i < 10000; i++) {
        x = Math.round(Math.random() * 10);
        y = Math.round(Math.random() * 10);
        if (x > 2) {
            x = 0;
        }
        if (y > 2) {
            y = 2;
        }
        id = x+"_"+y;
        IChangePosition(id);
    }
}

// 初始化拼图位置
function InitPostion() {
    // 第一排三张
    $("#0_0").css("top", 0);
    $("#0_0").css("left", 0);

    $("#1_0").css("top", 0);
    $("#1_0").css("left", $("#1_0").width());

    $("#2_0").css("top", 0);
    $("#2_0").css("left", $("#2_0").width()*2);

    // 第二排三张
    $("#0_1").css("top", $("#0_1").height());
    $("#0_1").css("left", 0);

    $("#1_1").css("top", $("#0_1").height());
    $("#1_1").css("left", $("#1_0").width());

    $("#2_1").css("top", $("#0_1").height());
    $("#2_1").css("left", $("#1_0").width()*2);

    // 第三排三张
    $("#0_2").css("top", $("#0_1").height()*2);
    $("#0_2").css("left", 0);

    $("#1_2").css("top", $("#0_1").height() * 2);
    $("#1_2").css("left", $("#1_0").width());

    $("#2_2").css("top", $("#0_1").height() * 2);
    $("#2_2").css("left", $("#1_0").width()*2);
}

function IChangePosition(id) {

    var x =parseInt($("#"+id).attr("data-x"));
    var y = parseInt($("#" + id).attr("data-y"));

    var x_t = 0;
    var y_t = 0;

    // 验证是否可以移动
    var isMove = false;
    var MoveID = "";
    var MoveID2 = successList[y][x];
    var MoveID_T = "";

    // 移动的中间变量
    var top_t = "";
    var left_t = "";

    // 右移
    if ((x + 1) <= 2 && puzzleList[y][x + 1] == 0) {
        MoveID = successList[y][(x + 1)];
        puzzleList[y][x] = 0;
        puzzleList[y][x + 1] = 1;

        MoveID_T = successList[y][(x + 1)];
        successList[y][(x + 1)] = successList[y][x];
        successList[y][x] = MoveID_T;
    }
    // 左移
    else if ((x - 1) >= 0 && puzzleList[y][x - 1] == 0) {
        MoveID = successList[y][(x - 1)];
        puzzleList[y][x] = 0;
        puzzleList[y][x - 1] = 1;

        MoveID_T = successList[y][(x - 1)];
        successList[y][(x - 1)] = successList[y][x];
        successList[y][x] = MoveID_T;
    }
    // 下移
    else if ((y + 1) <= 2 && puzzleList[y + 1][x] == 0) {
        MoveID = successList[(y + 1)][x];
        puzzleList[y][x] = 0;
        puzzleList[y + 1][x] = 1;

        MoveID_T = successList[(y + 1)][x];
        successList[(y + 1)][x] = successList[y][x];
        successList[y][x] = MoveID_T;
    }
    // 上移
    else if ((y - 1) >= 0 && puzzleList[y - 1][x] == 0) {
        MoveID = successList[(y - 1)][x];
        puzzleList[y][x] = 0;
        puzzleList[y - 1][x] = 1;

        MoveID_T = successList[(y - 1)][x];
        successList[(y - 1)][x] = successList[y][x];
        successList[y][x] = MoveID_T;
    }

    if (MoveID.length > 0) {
        isMove = true;
    }

    if (isMove) {
        top_t = $("#" + MoveID).css("top");
        left_t = $("#" + MoveID).css("left");
        x_t = $("#" + MoveID).attr("data-x");
        y_t = $("#" + MoveID).attr("data-y");
        


        $("#" + MoveID).css("top", $("#" + MoveID2).css("top"));
        $("#" + MoveID).css("left", $("#" + MoveID2).css("left"));
        $("#" + MoveID).attr("data-x", $("#" + MoveID2).attr("data-x"));
        $("#" + MoveID).attr("data-y", $("#" + MoveID2).attr("data-y"));

        $("#" + MoveID2).css("top", top_t);
        $("#" + MoveID2).css("left", left_t);
        $("#" + MoveID2).attr("data-x", x_t);
        $("#" + MoveID2).attr("data-y", y_t);
    }
}

//刷新页面
function refresh(){
  location.reload();
}



