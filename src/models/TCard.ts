export type TResponse = {
    companies: TCard[];
};
export type TCard = {
    company: TCompany;
    customerMarkParameters: TCustomerMarkParameters;
    mobileAppDashboard: TMobileAppDashboard;
};
type TCompany = {
    companyId: string;
};

type TCustomerMarkParameters = {
    loyaltyLevel: {
        number: number;
        name: string;
        requiredSum: number;
        markToCash: number;
        cashToMark: number;
    };
    mark: number;
};
type TMobileAppDashboard = {
    companyName: string;
    logo: string;
    backgroundColor: string;
    mainColor: string;
    cardBackgroundColor: string;
    textColor: string;
    highlightTextColor: string;
    accentColor: string;
};

// {
//     companies: [
//         {
//             company: {
//                 companyId: "2902e18b-0c99-459d-9872-ea55de466464";
//             };
//             customerMarkParameters: {
//                 loyaltyLevel: {
//                     number: 4;
//                     name: "первый";
//                     requiredSum: 2750;
//                     markToCash: 66;
//                     cashToMark: 75;
//                 };
//                 mark: 4145;
//             };
//             mobileAppDashboard: {
//                 companyName: "Пиво у Палыча";
//                 logo: "http://bonusmoney.info/image/mail/logo1.png";
//                 backgroundColor: "#EFEFEF";
//                 mainColor: "#2688EB";
//                 cardBackgroundColor: "#FFFFFF";
//                 textColor: "#949494";
//                 highlightTextColor: "#1A1A1A";
//                 accentColor: "#FF3044";
//             };
//         }
//     ];
// };
