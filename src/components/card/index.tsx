import { CardBody } from "../cardBody";
import { CardFooter } from "../cardFooter";
import { CardHeader } from "../cardHeader";
import { TCard } from "../../models/TCard";
import styles from "./card.module.css";

type Props = {
    cardData: TCard;
};
export function Card({ cardData }: Props) {
    return (
        <div
            className={styles["card-container"]}
            style={{
                backgroundColor: `${cardData.mobileAppDashboard.cardBackgroundColor}`,
            }}
        >
            <CardHeader
                companyName={cardData.mobileAppDashboard.companyName}
                logoURL={cardData.mobileAppDashboard.logo}
                textColor={cardData.mobileAppDashboard.highlightTextColor}
            />
            <CardBody
                points={cardData.customerMarkParameters.mark}
                cashBack={
                    cardData.customerMarkParameters.loyaltyLevel.markToCash
                }
                level={cardData.customerMarkParameters.loyaltyLevel.name}
                highlightColor={cardData.mobileAppDashboard.highlightTextColor}
                textColor={cardData.mobileAppDashboard.textColor}
            />
            <CardFooter
                companyID={cardData.company.companyId}
                buttonBackgroundColor={
                    cardData.mobileAppDashboard.backgroundColor
                }
                trashColor={cardData.mobileAppDashboard.accentColor}
                eyeAndButtonTextColor={cardData.mobileAppDashboard.mainColor}
            />
        </div>
    );
}
