
var res = {

    //image
    avatar_png: "res/avatar.png",
    common_png: "res/common.png",
    game_png : "res/game.png",
    index_png : "res/index.png",
    login_png : "res/login.png",
    poker_png : "res/poker.png",
    profile_png: "res/profile.png",
    rank_png: "res/rank.png",
    room_png : "res/room.png",
    settings_png : "res/settings.png",
    shop_png : "res/shop.png",
    task_png : "res/task.png",
    exp_png: "res/free_expression.png",
    //plist
    avatar_plist: "res/avatar.plist",
    common_plist: "res/common.plist",
    game_plist : "res/game.plist",
    index_plist : "res/index.plist",
    login_plist : "res/login.plist",
    poker_plist : "res/poker.plist",
    profile_plist: "res/profile.plist",
    rank_plist: "res/rank.plist",
    room_plist : "res/room.plist",
    settings_plist : "res/settings.plist",
    shop_plist : "res/shop.plist",
    task_plist : "res/task.plist",
    exp_plist: "res/free_expression.plist",
    //effect


    //res/x.png
    logo: "res/logo.png",
    loadingBg: "res/loading_bg.png",
    loading: "res/loading.png",
    common_box_1: "res/common_box_1.png",
    common_btn_lan: "res/common_btn_lan.png",
    common_btn_lv: "res/common_btn_lv.png",
    common_btn_shanchu: "res/common_btn_shanchu.png",

    effects_missile_json:"res/effects/Missile.ExportJson",
    effects_missile_png:"res/effects/Missile0.png",
    effects_missile_plist:"res/effects/Missile0.plist",
    effects_bomb_json:"res/effects/bomb.ExportJson",
    effects_bomb_png:"res/effects/bomb0.png",
    effects_bomb_plist:"res/effects/bomb0.plist",
    effects_line2_json:"res/effects/line2.ExportJson",
    effects_line2_png:"res/effects/line20.png",
    effects_line2_plist:"res/effects/line20.plist",
    effects_plane_json:"res/effects/plane.ExportJson",
    effects_plane_png:"res/effects/plane0.png",
    effects_plane_plist:"res/effects/plane0.plist",
    effects_doubleline2_json:"res/effects/doubleline2.ExportJson",
    effects_doubleline2_png:"res/effects/doubleline20.png",
    effects_doubleline2_plist:"res/effects/doubleline20.plist",
    effects_spring_json:"res/effects/spring.ExportJson",
    effects_spring_png:"res/effects/spring0.png",
    effects_spring_plist:"res/effects/spring0.plist"

    //dev
};

var __effectFiles = [
    "",
    res.effects_line2_json,//1
    res.effects_plane_json,//2
    res.effects_bomb_json,//3
    res.effects_doubleline2_json,//4
    res.effects_missile_json,//5
    res.effects_spring_json//6
];

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
};

var audio_backMusic = ["res/audio/music/Audio_Game_Back.mp3", ""] ;
var audio_common = {
    Bank_Ruptcy : "res/audio/common/Audio_Bank_Ruptcy.mp3",
    Button_Click : "res/audio/common/Audio_Button_Click.mp3",
    Card_Click : "res/audio/common/Audio_Card_Click.mp3",
    Deal_Card : "res/audio/common/Audio_Deal_Card.mp3",
    Get_Glod : "res/audio/common/Audio_Get_Glod.mp3",
    Hint_Warn : "res/audio/common/Audio_Hint_Warn.mp3",
    Open_Chest : "res/audio/common/Audio_Open_Chest.mp3",
    Out_Card : "res/audio/common/Audio_Out_Card.mp3",
    Reminded_Myself : "res/audio/common/Audio_Reminded_Myself.mp3",
    User_AI : "res/audio/common/Audio_User_AI.mp3",
    You_Lose : "res/audio/common/Audio_You_Lose.mp3",
    You_Win : "res/audio/common/Audio_You_Win.mp3",
    CardType_Bomb : "res/audio/common/CardType_Bomb.mp3",
    Player_Come_In : "res/audio/common/Player_Come_In.mp3",
    Player_Logout : "res/audio/common/Player_Logout.mp3"

};
//var audio_card = {
//    Bomb : ["res/audio/card/Audio_Card_Bomb_M.mp3" , "res/audio/card/Audio_Card_Bomb_W.mp3" ],
//    Double_2 : ["res/audio/card/Audio_Card_Double_2_M.mp3", "res/audio/card/Audio_Card_Double_2_W.mp3"],
//    Double_3 : ["res/audio/card/Audio_Card_Double_3_M.mp3", "res/audio/card/Audio_Card_Double_3_W.mp3"],
//    Double_4 : ["res/audio/card/Audio_Card_Double_4_M.mp3", "res/audio/card/Audio_Card_Double_4_W.mp3"],
//    Double_5 : ["res/audio/card/Audio_Card_Double_5_M.mp3", "res/audio/card/Audio_Card_Double_5_W.mp3"],
//    Double_6 : ["res/audio/card/Audio_Card_Double_6_M.mp3", "res/audio/card/Audio_Card_Double_6_W.mp3"],
//    Double_7 : ["res/audio/card/Audio_Card_Double_7_M.mp3", "res/audio/card/Audio_Card_Double_7_W.mp3"],
//    Double_8 : ["res/audio/card/Audio_Card_Double_8_M.mp3", "res/audio/card/Audio_Card_Double_8_W.mp3"],
//    Double_9 : ["res/audio/card/Audio_Card_Double_9_M.mp3", "res/audio/card/Audio_Card_Double_9_W.mp3"],
//    Double_10 : ["res/audio/card/Audio_Card_Double_10_M.mp3", "res/audio/card/Audio_Card_Double_10_W.mp3"],
//    Double_A : ["res/audio/card/Audio_Card_Double_A_M.mp3", "res/audio/card/Audio_Card_Double_A_W.mp3"],
//    Double_J : ["res/audio/card/Audio_Card_Double_J_M.mp3", "res/audio/card/Audio_Card_Double_J_W.mp3"],
//    Double_K : ["res/audio/card/Audio_Card_Double_K_M.mp3", "res/audio/card/Audio_Card_Double_K_W.mp3"],
//    Double_Q : ["res/audio/card/Audio_Card_Double_Q_M.mp3", "res/audio/card/Audio_Card_Double_Q_W.mp3"],
//    Rocket : ["res/audio/card/Audio_Card_Rocket_M.mp3", "res/audio/card/Audio_Card_Rocket_W.mp3"],
//    Single_2 : ["res/audio/card/Audio_Card_Single_2_M.mp3", "res/audio/card/Audio_Card_Single_2_W.mp3"],
//    Single_3 : ["res/audio/card/Audio_Card_Single_3_M.mp3", "res/audio/card/Audio_Card_Single_3_W.mp3"],
//    Single_4 : ["res/audio/card/Audio_Card_Single_4_M.mp3", "res/audio/card/Audio_Card_Single_4_W.mp3"],
//    Single_5 : ["res/audio/card/Audio_Card_Single_5_M.mp3", "res/audio/card/Audio_Card_Single_5_W.mp3"],
//    Single_6 : ["res/audio/card/Audio_Card_Single_6_M.mp3", "res/audio/card/Audio_Card_Single_6_W.mp3"],
//    Single_7 : ["res/audio/card/Audio_Card_Single_7_M.mp3", "res/audio/card/Audio_Card_Single_7_W.mp3"],
//    Single_8 : ["res/audio/card/Audio_Card_Single_8_M.mp3", "res/audio/card/Audio_Card_Single_8_W.mp3"],
//    Single_9 : ["res/audio/card/Audio_Card_Single_9_M.mp3", "res/audio/card/Audio_Card_Single_9_W.mp3"],
//    Single_10 : ["res/audio/card/Audio_Card_Single_10_M.mp3", "res/audio/card/Audio_Card_Single_10_W.mp3"],
//    Single_A : ["res/audio/card/Audio_Card_Single_A_M.mp3", "res/audio/card/Audio_Card_Single_A_W.mp3"],
//    Single_J : ["res/audio/card/Audio_Card_Single_J_M.mp3", "res/audio/card/Audio_Card_Single_J_W.mp3"],
//    Single_Joker1 : ["res/audio/card/Audio_Card_Single_Joker1_M.mp3", "res/audio/card/Audio_Card_Single_Joker1_W.mp3"],
//    Single_Joker2 : ["res/audio/card/Audio_Card_Single_Joker2_M.mp3", "res/audio/card/Audio_Card_Single_Joker2_W.mp3"],
//    Single_K : ["res/audio/card/Audio_Card_Single_K_M.mp3", "res/audio/card/Audio_Card_Single_K_W.mp3"],
//    Single_Q : ["res/audio/card/Audio_Card_Single_Q_M.mp3", "res/audio/card/Audio_Card_Single_Q_W.mp3"],
//    Three_M : ["res/audio/card/Audio_Card_Three_M.mp3", "res/audio/card/Audio_Card_Three_W.mp3"],
//    Pass1_M : ["res/audio/card/Audio_Pass1_M.mp3", "res/audio/card/Audio_Pass1_W.mp3"],
//    Pass2_M : ["res/audio/card/Audio_Pass2_M.mp3", "res/audio/card/Audio_Pass2_W.mp3"],
//    Pass3_M : ["res/audio/card/Audio_Pass3_M.mp3", "res/audio/card/Audio_Pass3_W.mp3"],
//    Yasi1_M : ["res/audio/card/Audio_Yasi1_M.mp3", "res/audio/card/Audio_Yasi1_W.mp3"],
//    Yasi2_M : ["res/audio/card/Audio_Yasi2_M.mp3", "res/audio/card/Audio_Yasi2_W.mp3"],
//    Yasi3_M : ["res/audio/card/Audio_Yasi3_M.mp3", "res/audio/card/Audio_Yasi3_W.mp3"]
//};

var audio_Single = [
    ["0",""],["1",""],["2",""],["3",""],["4",""],
    ["res/audio/card/Audio_Card_Single_5_M.mp3", "res/audio/card/Audio_Card_Single_5_W.mp3"],
    ["res/audio/card/Audio_Card_Single_6_M.mp3", "res/audio/card/Audio_Card_Single_6_W.mp3"],
    ["res/audio/card/Audio_Card_Single_7_M.mp3", "res/audio/card/Audio_Card_Single_7_W.mp3"],
    ["res/audio/card/Audio_Card_Single_8_M.mp3", "res/audio/card/Audio_Card_Single_8_W.mp3"],
    ["res/audio/card/Audio_Card_Single_9_M.mp3", "res/audio/card/Audio_Card_Single_9_W.mp3"],
    ["res/audio/card/Audio_Card_Single_10_M.mp3", "res/audio/card/Audio_Card_Single_10_W.mp3"],
    ["res/audio/card/Audio_Card_Single_J_M.mp3", "res/audio/card/Audio_Card_Single_J_W.mp3"],
    ["res/audio/card/Audio_Card_Single_Q_M.mp3", "res/audio/card/Audio_Card_Single_Q_W.mp3"],
    ["res/audio/card/Audio_Card_Single_K_M.mp3", "res/audio/card/Audio_Card_Single_K_W.mp3"],
    ["res/audio/card/Audio_Card_Single_A_M.mp3", "res/audio/card/Audio_Card_Single_A_W.mp3"],
    ["res/audio/card/Audio_Card_Single_2_M.mp3", "res/audio/card/Audio_Card_Single_2_W.mp3"],
    ["res/audio/card/Audio_Card_Single_3_M.mp3", "res/audio/card/Audio_Card_Single_3_W.mp3"],
    ["res/audio/card/Audio_Card_Single_4_M.mp3", "res/audio/card/Audio_Card_Single_4_W.mp3"],
    ["res/audio/card/Audio_Card_Single_Joker1_M.mp3", "res/audio/card/Audio_Card_Single_Joker1_W.mp3"],
    ["res/audio/card/Audio_Card_Single_Joker2_M.mp3", "res/audio/card/Audio_Card_Single_Joker2_W.mp3"]
];
var audio_Double = [
    ["0",""],["1",""],["2",""],["3",""],["4",""],
    ["res/audio/card/Audio_Card_Double_5_M.mp3", "res/audio/card/Audio_Card_Double_5_W.mp3"],
    ["res/audio/card/Audio_Card_Double_6_M.mp3", "res/audio/card/Audio_Card_Double_6_W.mp3"],
    ["res/audio/card/Audio_Card_Double_7_M.mp3", "res/audio/card/Audio_Card_Double_7_W.mp3"],
    ["res/audio/card/Audio_Card_Double_8_M.mp3", "res/audio/card/Audio_Card_Double_8_W.mp3"],
    ["res/audio/card/Audio_Card_Double_9_M.mp3", "res/audio/card/Audio_Card_Double_9_W.mp3"],
    ["res/audio/card/Audio_Card_Double_10_M.mp3", "res/audio/card/Audio_Card_Double_10_W.mp3"],
    ["res/audio/card/Audio_Card_Double_J_M.mp3", "res/audio/card/Audio_Card_Double_J_W.mp3"],
    ["res/audio/card/Audio_Card_Double_Q_M.mp3", "res/audio/card/Audio_Card_Double_Q_W.mp3"],
    ["res/audio/card/Audio_Card_Double_K_M.mp3", "res/audio/card/Audio_Card_Double_K_W.mp3"],
    ["res/audio/card/Audio_Card_Double_A_M.mp3", "res/audio/card/Audio_Card_Double_A_W.mp3"],
    ["res/audio/card/Audio_Card_Double_2_M.mp3", "res/audio/card/Audio_Card_Double_2_W.mp3"],
    ["res/audio/card/Audio_Card_Double_3_M.mp3", "res/audio/card/Audio_Card_Double_3_W.mp3"],
    ["res/audio/card/Audio_Card_Double_4_M.mp3", "res/audio/card/Audio_Card_Double_4_W.mp3"]
];
var audio_Bomb = [
    ["res/audio/card/Audio_Card_Bomb_M.mp3" , "res/audio/card/Audio_Card_Bomb_W.mp3" ]
];
var audio_Four = [
    ["res/audio/card/Audio_Card_Four_M.mp3", "res/audio/card/Audio_Card_Four_W.mp3"]
];
var audio_Three = [
    ["res/audio/card/Audio_Card_Three_M.mp3", "res/audio/card/Audio_Card_Three_W.mp3"]
];
var audio_Double_Joker = [
    ["res/audio/card/Audio_Card_SHUANGW_M.mp3", "res/audio/card/Audio_Card_SHUANGW_W.mp3"]
];
var audio_shuang3 = [
    ["res/audio/card/Audio_Card_SHUANG3_M.mp3", "res/audio/card/Audio_Card_SHUANG3_W.mp3"]
];

var audio_No = [
    ["res/audio/card/_M.mp3", "res/audio/card/_W.mp3"]
];
var audio_talk = [
    ["res/audio/card/Audio_TALK_NOTHING_M.mp3", "res/audio/card/Audio_TALK_NOTHING_W.mp3"],
    ["res/audio/card/Audio_TALK_GUZI_M.mp3", "res/audio/card/Audio_TALK_GUZI_W.mp3"],
    ["res/audio/card/Audio_TALK_LIANG_M.mp3", "res/audio/card/Audio_TALK_LIANG_W.mp3"]
]
var audio_fan_you3 = [
    ["res/audio/card/Audio_FAN_YOU3_M.mp3", "res/audio/card/Audio_FAN_YOU3_W.mp3"]
]
var audio_card = [
    audio_Single, audio_Double, audio_Three, audio_Four, audio_Double_Joker, audio_shuang3, audio_No
];
var audio_fanmenu = {
    Pass :[
        ["res/audio/card/Audio_Pass1_M.mp3", "res/audio/card/Audio_Pass1_W.mp3"],
        ["res/audio/card/Audio_Pass2_M.mp3", "res/audio/card/Audio_Pass2_W.mp3"],
        ["res/audio/card/Audio_Pass3_M.mp3", "res/audio/card/Audio_Pass3_W.mp3"]
    ]
};

var audio_chat = [
    ["res/audio/chat/Audio_Dialog1_M.mp3", "res/audio/chat/Audio_Dialog1_W.mp3"],
    ["res/audio/chat/Audio_Dialog2_M.mp3", "res/audio/chat/Audio_Dialog2_W.mp3"],
    ["res/audio/chat/Audio_Dialog3_M.mp3", "res/audio/chat/Audio_Dialog3_W.mp3"],
    ["res/audio/chat/Audio_Dialog4_M.mp3", "res/audio/chat/Audio_Dialog4_W.mp3"],
    ["res/audio/chat/Audio_Dialog5_M.mp3", "res/audio/chat/Audio_Dialog5_W.mp3"],
    ["res/audio/chat/Audio_Dialog6_M.mp3", "res/audio/chat/Audio_Dialog6_W.mp3"],
    ["res/audio/chat/Audio_Dialog7_M.mp3", "res/audio/chat/Audio_Dialog7_W.mp3"],
    ["res/audio/chat/Audio_Dialog8_M.mp3", "res/audio/chat/Audio_Dialog8_W.mp3"],
    ["res/audio/chat/Audio_Dialog9_M.mp3", "res/audio/chat/Audio_Dialog9_W.mp3"],
    ["res/audio/chat/Audio_Dialog10_M.mp3", "res/audio/chat/Audio_Dialog10_W.mp3"],
];
var PassText = [
    "不出！",
    "过！",
    "过！"
]

var rankConf = ["rank_1.png", "rank_2.png", "rank_3.png", "rank_4.png", "rank_5.png", "rank_6.png"
    , "rank_7.png", "rank_8.png", "rank_9.png", "rank_10.png", "rank_11.png", "rank_12.png"]