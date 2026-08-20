gx.evt.autoSkip = false;
function login_top(a) {
    this.ServerClass = "Login_Top";
    this.PackageName = "GeneXus.Programs";
    this.setObjectType("web");
    this.setCmpContext(a);
    this.ReadonlyForm = true;
    this.hasEnterEvent = false;
    this.autoRefresh = true;
    this.SetStandaloneVars = function() {}
    ;
    this.e13122_client = function() {
        this.executeServerEvent("ENTER", true)
    }
    ;
    this.e14122_client = function() {
        this.executeServerEvent("CANCEL", true)
    }
    ;
    this.GXValidFnc = [];
    this.GXCtrlIds = [2, 5];
    this.GXLastCtrlId = 5;
    this.GXValidFnc[2] = {
        fld: "TABLE_TOP",
        grid: 0
    };
    this.GXValidFnc[5] = {
        fld: "IMAGE1",
        grid: 0
    };
    this.ServerEvents = ["e13122_client", "e14122_client"];
    this.SetStandaloneVars()
}
;