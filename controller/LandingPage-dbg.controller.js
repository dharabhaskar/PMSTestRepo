sap.ui.define(
  [
    "com/infocus/GraphitePms/controller/BaseController",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/routing/History"
  ],
  function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("com.infocus.GraphitePms.controller.LandingPage", {
      onInit: function () {
        var oImgModel = new JSONModel({
          banners: {
            pic1: "https://sapui5.hana.ondemand.com/test-resources/sap/m/demokit/cart/webapp/img/ShopCarouselCreditCard.jpg",
            pic2: "https://www.bizarmour.co.za/wp-content/uploads/2020/04/bizarmour-performance-management-banner-1080x380.jpg"
          },
        });
        this.getView().setModel(oImgModel, "img");
      },
      onMgrPress:function(){
        this.getOwnerComponent().getRouter().navTo("ApprovalMain");
      },
      onEmpPress:function(){
        this.getOwnerComponent().getRouter().navTo("EmployeeSelfAppraisal");
      },
      onNavButtonPressed:function(){
        var oHistory = History.getInstance();
              var sPreviousHash = oHistory.getPreviousHash();
  
              if (sPreviousHash !== undefined) {
                  window.history.go(-1);
              } else {
                  var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                  oRouter.navTo("LandingPage", true);
              }
      }
    });
  }
);
