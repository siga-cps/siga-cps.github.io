gx.evt.autoSkip = false;
function login_mp() {
    this.ServerClass = "Login_MP";
    this.PackageName = "GeneXus.Programs";
    this.setObjectType("web");
    this.IsMasterPage = true;
    this.hasEnterEvent = false;
    this.autoRefresh = true;
    this.SetStandaloneVars = function() {}
    ;
    this.e13112_client = function() {
        this.executeServerEvent("ENTER_MPAGE", true)
    }
    ;
    this.e14112_client = function() {
        this.executeServerEvent("CANCEL_MPAGE", true)
    }
    ;
    this.GXValidFnc = [];
    this.GXCtrlIds = [2, 10, 18];
    this.GXLastCtrlId = 18;
    this.GXValidFnc[2] = {
        fld: "TABLE_MASTER",
        grid: 0
    };
    this.GXValidFnc[10] = {
        fld: "TABLE_MID",
        grid: 0
    };
    this.GXValidFnc[18] = {
        fld: "IMAGE1",
        grid: 0
    };
    this.ServerEvents = ["e13112_client", "e14112_client"];
    this.SetStandaloneVars();
    this.setComponent({
        id: "WEBCOMP1",
        GXClass: "login_top",
        Prefix: "MPW0005",
        lvl: 1
    })
}
login_mp.prototype = new gx.GxObject;
gx.setMasterPage(new login_mp());
