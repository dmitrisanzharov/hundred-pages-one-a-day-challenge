import React from "react";
import Image from "next/image";
const gradeColorFunction = require("../functions/page1-gradeColorFunction");

const Page1MarketPlaceCard = ({ obj }) => {
	const {
		image,
		ribbonImage,
		ribbonType,
		mainName,
		subName,
		interestOffered,
		loanGrade,
		totalAmount,
		durationInMonths,
	} = obj;

	return (
		<React.Fragment>
			<div className="page1-cardWrapper shadow-dreamy">

				<div className="page1-cardWrapper-imageHolder">
					<Image src={image}  layout='fill' alt="" />
				</div>

                <div className={ribbonType === 'funded' ? 'page1-cardWrapper-ribbonHolderFunded' : 'page1-cardWrapper-ribbonHolderGreen'}>
					<Image src={ribbonImage}  height='120%' width='130%' alt="" />
				</div>

				<div className="page1-cardWrapper-mainName text-center mt-3 mb-4">
					{mainName}
				</div>

				<div className="page1-cardWrapper-subName text-center mt-3 mb-4">
					{subName}
				</div>

				<div className="d-flex  justify-content-evenly align-items-center">
					<div className=" text-center">
						<div className="page1-interestOfferedAndLoanGradeText">
							Interest offered
						</div>
						<div className="page1-interestNumberText">{interestOffered}%</div>
					</div>
					<div className=" text-center">
						<div className="page1-interestOfferedAndLoanGradeText">
							Loan Grade
						</div>
						<div
							className="page1-gradeDiv mt-2"
							style={gradeColorFunction(loanGrade)}
						>
							<div
								style={{
									fontFamily: "Lato",
									fontStyle: "normal",
									fontWeight: "700",
									fontSize: "12px",
									lineHeight: "12px",
									color: "#ffffff",
								}}
							>
								{loanGrade}
							</div>
						</div>
					</div>
				</div>

				<div className="page1-theLine mt-3 mb-4"></div>

				{/* 100% funded and total amount section */}

				<div className="d-flex justify-content-between align-items-start px-4 pb-4">
					<div className="d-flex page1-cardBottomBox1 mt-1">
						<div className="page1-100pcText align-self-end ">100%</div>
						<div className="page1-fundedTextCardBottom align-self-end ms-2 mb-1">
							funded
						</div>
					</div>

					<div className="">
						<div className="page1-totalAmountCardBottomText">
							€
							{
								totalAmount
									.toFixed(1)
									.replace(/\d(?=(\d{3})+\.)/g, "$&,")
									.split(".")[0]
							}
						</div>
						<div className="page1-overDurationCardBottomText text-end">
							over {durationInMonths} Months
						</div>
					</div>
				</div>

				{/* end of the card */}
			</div>
		</React.Fragment>
	);
};

export default Page1MarketPlaceCard;
