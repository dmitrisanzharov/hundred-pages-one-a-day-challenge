import React, { useState, useEffect } from "react";
import { TiTick } from "react-icons/ti";
import Image from "next/image";

// component imports
import Page1MarketPlaceCard from "../components/Page1MarketPlaceCard";
import Meta from '../components/Meta'; 

const Page1FlenderIEIndex = () => {
	const [activeName, setActiveName] = useState("");

	const demoPageAlert = () => {
		alert("this is DEMO page, so there is no functionality here");
	};

	return (
		<React.Fragment>

{/* ****************************************************************** */}
{/* *****   META SECTION     ****** */}
{/* ***************************************************************** */}

			<Meta obj={{
				titleStr: 'flender index',
				nameStr: 'page1 flender index page clone',
				descriptionStr: 'clone of flender.ie index page, fully mobile optimized, but no function',
				keywordsStr: 'react, next, css, sass, scss, html',
				faviconUrl: '/flenderFav.ico'
			}} />

			{/* ****************************************************************** */}
			{/* *****   Navbar    ****** */}
			{/* ***************************************************************** */}

			<nav
				id="navBarFinlendersPage1"
				className="navbar navbar-expand-lg navbar-light bg-light"
			>
				<div className="container-fluid px-5 py-2">
					<a className="navbar-brand ms-3 me-5" href="#">
						<span className="page1-flenderLogo">Flender</span>
					</a>

					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div
						className="collapse navbar-collapse text-center"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav me-auto mb-2 mb-lg-0 ps-lg-4 mt-3 mt-lg-0">
							<li className="nav-item" onClick={() => setActiveName("invest")}>
								<a
									className={`nav-link ${activeName === "invest" && "active"}`}
									aria-current="page"
									href="#"
								>
									Invest
								</a>
							</li>

							<li
								className="nav-item ms-lg-2"
								onClick={() => setActiveName("Business loans")}
							>
								<a
									className={`nav-link ${
										activeName === "Business loans" && "active"
									}`}
									href="#"
								>
									Business loans
								</a>
							</li>

							<li
								className="nav-item ms-lg-2"
								onClick={() => setActiveName("Marketplace")}
							>
								<a
									className={`nav-link ${
										activeName === "Marketplace" && "active"
									}`}
									href="#"
								>
									Marketplace
								</a>
							</li>

							<li className="nav-item dropdown" onClick={()=> setActiveName('About')}>
          <a className={`nav-link dropdown-toggle`} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Mission</a></li>
            <li><a className="dropdown-item" href="#">Team</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">FAQ</a></li>
          </ul>
        </li>
							<li
								className="nav-item ms-lg-2 "
								onClick={() => setActiveName("Contact")}
							>
								<a
									className={`nav-link ${activeName === "Contact" && "active"}`}
									href="#"
								>
									Contact
								</a>
							</li>
						</ul>
						<form className="d-flex flex-column flex-lg-row justify-content-center align-items-center me-lg-5">
							<div className="page1-LoginText px-4 py-4">Log in</div>
							<div className="page1-getStartedButton p-2">Get Started</div>
						</form>
					</div>
				</div>
			</nav>

			{/* ****************************************************************** */}
			{/* *****   Flender is here to help you expand SECTION     ****** */}
			{/* ***************************************************************** */}

			<div className="page1-businessMeetingBackground ">
				<div className="container  mt-5 p-0 p-md-2">
					<div className="col-md-9 col-lg-6 mt-2">
						<div className="page1-flenderHereToHelpExpandText py-3 px-3 px-sm-0 ">
							<div className="p-0 ">
								Flender is here to help you expand your business today. <br />
								No more waiting weeks or months for your bank to give you the
								&apos;slow no&apos;.
							</div>
						</div>
						<div className="d-flex justify-content-center align-items-center justify-content-sm-start">
							<div className="page1-greenBtn mt-4 p-2 px-3">
								Get a Flender loan
							</div>
						</div>
						<div className="page1-blueNewsBox mt-5 mb-sm-3 p-3">
							<span className="page1-newsIconAndText">
								<i className="bi bi-info-circle-fill me-1"></i> News &nbsp;
							</span>
							<span>
								Flender - Fast Flexible Finance is delighted to announce the
								official launch of Project Green. This campaign focuses on
								&apos;Rebooting Irish SMEs&apos; and working alongside our SME community
								to assist in their ongoing efforts to reopen smoothly after
								Covid 19 restrictions.{" "}
							</span>
							<button className="page1-miniLearnMoreButton p-1">
								Learn more
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* ****************************************************************** */}
			{/* *****   5 tickboxes and Flender Background SECTION     ****** */}
			{/* ***************************************************************** */}

			<div className="page1-5tickBoxes d-flex flex-column flex-md-row justify-content-center align-items-center p-5 ">
				<div className="d-flex  mt-2 page1-tickBoxHolder">
					<div className="col-2 col-md-4">
						<h2 className="d-flex justify-content-center align-items-start p-0 m-0">
							<TiTick />
						</h2>{" "}
					</div>
					<div className="col-10 col-md-8 page1-tickBoxText">
						Fast affordable finance
					</div>
				</div>

				<div className="d-flex  mt-2 page1-tickBoxHolder">
					<div className="col-2 col-md-4">
						<h2 className="d-flex justify-content-center align-items-start p-0 m-0">
							<TiTick />
						</h2>{" "}
					</div>
					<div className="col-10 col-md-8 page1-tickBoxText">
						Same-day credit decisions
					</div>
				</div>

				<div className="d-flex  mt-2 page1-tickBoxHolder">
					<div className="col-2 col-md-4">
						<h2 className="d-flex justify-content-center align-items-start p-0 m-0">
							<TiTick />
						</h2>{" "}
					</div>
					<div className="col-10 col-md-8 page1-tickBoxText">
						Competitive <br /> rates
					</div>
				</div>

				<div className="d-flex  mt-2 page1-tickBoxHolder">
					<div className="col-2 col-md-4">
						<h2 className="d-flex justify-content-center align-items-start p-0 m-0">
							<TiTick />
						</h2>{" "}
					</div>
					<div className="col-10 col-md-8 page1-tickBoxText">
						Loans up to €300,000
					</div>
				</div>

				<div className="d-flex  mt-2 page1-tickBoxHolder">
					<div className="col-2 col-md-4">
						<h2 className="d-flex justify-content-center align-items-start p-0 m-0">
							<TiTick />
						</h2>{" "}
					</div>
					<div className="col-10 col-md-8 page1-tickBoxText">
						Terms up to 60 months
					</div>
				</div>
			</div>

			{/* ****************************************************************** */}
			{/* *****   How will you use your Flener - SECTION     ****** */}
			{/* ***************************************************************** */}

			<div
				className="d-flex justify-content-center align-items-center "
				style={{ background: "#eeeeee" }}
			>
				<div className="page1-HowWillYouUseYourFlenderLoanContainer pt-5 pb-3 px-4">
					<div className="page1-HowWillYouUseYourFlenderLoanH1Text text-center">
						How will you use your Flender business loan?
					</div>
					<div className="page1-HowWillYouUseYourFlenderLoanFastDecisionText text-center mt-4 px-4">
						Flender offers fast decisions, competitive rates and terms up to 5
						years. And with loans between €15,000 and €300,000 we can help you
						with:
					</div>
					<div className="d-flex flex-column justify-content-center align-items-center mt-5">
						<div className="d-flex  " style={{ minWidth: "265px" }}>
							<h2 className="d-flex p-0 m-0" style={{ color: "#0DC0B2" }}>
								<TiTick />
							</h2>{" "}
							<div className="page1-HowWillYouUseYourFlenderLoanBulletText">
								&nbsp; Launching a new product
							</div>
						</div>

						<div className="d-flex  " style={{ minWidth: "265px" }}>
							<h2 className="d-flex p-0 m-0" style={{ color: "#0DC0B2" }}>
								<TiTick />
							</h2>{" "}
							<div className="page1-HowWillYouUseYourFlenderLoanBulletText">
								&nbsp; Business expansion
							</div>
						</div>

						<div className="d-flex  " style={{ minWidth: "265px" }}>
							<h2 className="d-flex p-0 m-0" style={{ color: "#0DC0B2" }}>
								<TiTick />
							</h2>{" "}
							<div className="page1-HowWillYouUseYourFlenderLoanBulletText">
								&nbsp; Project financing
							</div>
						</div>

						<div className="d-flex  " style={{ minWidth: "265px" }}>
							<h2 className="d-flex p-0 m-0" style={{ color: "#0DC0B2" }}>
								<TiTick />
							</h2>{" "}
							<div className="page1-HowWillYouUseYourFlenderLoanBulletText">
								&nbsp; Working capital
							</div>
						</div>

						<div className="d-flex  " style={{ minWidth: "265px" }}>
							<h2 className="d-flex p-0 m-0" style={{ color: "#0DC0B2" }}>
								<TiTick />
							</h2>{" "}
							<div className="page1-HowWillYouUseYourFlenderLoanBulletText">
								&nbsp; Marketing
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-center align-items-center">
						<div className="page1-greenBtn mt-5 mb-3 p-2 px-3">
							Get a Flender loan
						</div>
					</div>
				</div>
			</div>

			{/* ****************************************************************** */}
			{/* *****   BIG RED IMAGE  SECTION     ****** */}
			{/* ***************************************************************** */}

			<div className="page1-bigRedImageParentContainer ">
				<div className="page1-bigRedImageDivWrapper">
					<div className="page1-bigRedImageBottomPageTextDiv d-flex flex-column justify-content-center align-items-center">
						<div className="page1-bigRedImageBottomPageQuoteTextStyle my-4 text-center px-4">
							<div style={{ maxWidth: "400px" }}>
								&apos;&apos; Flender gave me the opportunity to expand my
								business with growth capital.&apos;&apos;
							</div>
						</div>
						<div className="page1-bigRedImageBottomPageReferenceTextStyle text-center">
							Marc O&apos;Dwyer, Big Red Cloud
						</div>
					</div>

					<div className="page1-bigRedDivThatAppears">
						<div className="page1-bigRedDivThatAppearsQuote">
							&apos;&apos; Flender gave me the opportunity to expand my business
							with growth capital.&apos;&apos;
						</div>
						<div className="page1-bigRedDivThatAppearsReference mt-1">
							Marc O&apos;Dwyer, Big Red Cloud
						</div>
					</div>

					{/*  */}
				</div>
			</div>

			{/* ****************************************************************** */}
			{/* *****   Marketplace SECTION     ****** */}
			{/* ***************************************************************** */}

			<section className="">
				<div className="container">
					<div className="page1-MarketPlaceHeaderText text-center pb-1 my-4 ">
						Flender Marketplace
					</div>

					<div className="marketPlaceCardHolder d-flex flex-wrap flex-column flex-lg-row justify-content-center align-items-center">
						<div className="me-lg-4 mt-5 mt-lg-3">
							<Page1MarketPlaceCard
								obj={{
									image:
										"https://s3.eu-west-1.amazonaws.com/flender.avatar/uploads/campaign/avatar/5727/ea5e673d-0eff-4e45-ae46-61f3d818c40b.png",
									ribbonImage:
										"https://flender.ie/assets/funded-b47ebd154ec920ff1963d5e99dffee5b436edbfffb6e466fa7acb8bfcc12cfed.png",
									ribbonType: "funded",
									mainName: "Bear Sporting Events Ltd P...",
									subName: "Bear Sporting Events Limited",
									interestOffered: 8.85,
									loanGrade: "B",
									totalAmount: 53500,
									durationInMonths: 18,
								}}
							/>
						</div>

						<div className="me-lg-4 mt-5 mt-lg-3">
							<Page1MarketPlaceCard
								obj={{
									image:
										"https://s3.eu-west-1.amazonaws.com/flender.avatar/uploads/campaign/avatar/5684/7d8232b7-1d02-49cb-ab3b-d6ad773b34e7.png",
									ribbonImage:
										"https://flender.ie/assets/project-g-funded-04494f1a3365f6df322da18c79f8c8850c4e7b5356c523c797d874392b033ca2.png",
									ribbonType: "green",
									mainName: "Halpin Complete Construc...",
									subName: "Halpin Complete Ltd.",
									interestOffered: 10.95,
									loanGrade: "C+",
									totalAmount: 32000,
									durationInMonths: 18,
								}}
							/>
						</div>

						<div className="mt-5 mt-lg-3">
							<Page1MarketPlaceCard
								obj={{
									image:
										"https://s3.eu-west-1.amazonaws.com/flender.avatar/uploads/campaign/avatar/5666/a866b9c7-a426-4d4e-ae0b-941a16a0e640.png",
									ribbonImage:
										"https://flender.ie/assets/funded-b47ebd154ec920ff1963d5e99dffee5b436edbfffb6e466fa7acb8bfcc12cfed.png",
									ribbonType: "funded",
									mainName: "Laurel Lodge Nursing Home",
									subName: "Laurel Lodge Nursing Home Ltd",
									interestOffered: 8.85,
									loanGrade: "B",
									totalAmount: 60000,
									durationInMonths: 36,
								}}
							/>
						</div>

						{/* end of container that holds all investment opps */}
					</div>
				</div>
			</section>

			{/* ****************************************************************** */}
			{/* *****   More investment opporutnities SECTION     ****** */}
			{/* ***************************************************************** */}

			<div className="page1-moreInvestmentOppsButton mt-5 text-center ">
				<div className="page1-moreInvOppsText pt-5 mb-4">
					More Investment Opportunities
				</div>
			</div>

			{/* ****************************************************************** */}
			{/* *****   Red Dude section SECTION     ****** */}
			{/* ***************************************************************** */}

			<div className="p-0 m-0 ">
				<div className="row p-0 m-0">
					{/* box1 image */}

					<div
						className="col-lg-6"
						style={{
							position: "relative",
							minHeight: "480px",
							boxSizing: "border-box",
							cursor: 'pointer'
						}}
					>
						<div className="page1-redDudeImageBoxHolder"></div>
					</div>

					{/* box2 */}
					<div
						className="col-lg-6 pt-5 pb-3 px-5"
						style={{ background: "#FF0060", boxSizing: "border-box" }}
					>
						<div className="page1-redDudeHeading1">
							Jamie Heaslip&apos;s <br />
							10 for 10
						</div>

						<div
							className="page1-redDudeHeading2 mt-3"
							style={{ maxWidth: "75%" }}
						>
							&#8220;Why I&apos;ll be supporting 10 Irish businesses over the
							next 10 weeks&#8221;
						</div>

						<div className="page1-redDudeButton mt-4 mb-5 py-2 px-5">
							View Now
						</div>
					</div>
				</div>
			</div>

			{/* ****************************************************************** */}
			{/* *****   Flender Stats SECTION     ****** */}
			{/* ***************************************************************** */}

			<div className="page1-flenderStatsDiv ">
				<div className="container px-5 pt-5">
					<div className="row  text-center">
						<div className="col-lg-3 col-md-6 ">
							<div className="page1-flenderStatsTopText">€35,592,843</div>
							<div className="page1-flenderStatsBottomText mt-2">
								Lent to <br />
								Irish businesses
							</div>
						</div>

						<div className="col-lg-3 col-md-6 mt-3 mt-md-0 ">
							<div className="page1-flenderStatsTopText">6727</div>
							<div className="page1-flenderStatsBottomText mt-2">
								Amount of <br />
								lenders
							</div>
						</div>

						<div className="col-lg-3 col-md-6 mt-3 mt-lg-0 ">
							<div className="page1-flenderStatsTopText">1614</div>
							<div className="page1-flenderStatsBottomText mt-2">
								Irish jobs
								<br />
								created
							</div>
						</div>
						{/* box with info */}
						<div className="col-lg-3 col-md-6 mt-3 mt-lg-0 ">
							<div
								className="page1-flenderStatsTopText"
								style={{ position: "relative" }}
							>
								1.8%{" "}
								<span className="page1-flenderStatInfoIcon">
									<div className="page1-flenderStatsInfoBox py-2 px-3">
										<div className="page1-flenderStatsInfoBoxText text-center">
											Principle outstanding on loans where an event of default
											has occured or loans not performing 120+ days.
										</div>
										<div className="page1-flenderStatsLittleArrow"></div>
									</div>
									<i className="bi bi-info-circle-fill"></i>
								</span>
							</div>

							<div className="page1-flenderStatsBottomText mt-2">
								Default
								<br />
								Rate
							</div>
						</div>
					</div>

					{/* end of contaienr */}
				</div>

				{/* this is the fleder stats part */}
				<div className="page1-flenderStatsBottomText text-center pb-4 mt-5">
					Flender <em>Stats</em>
				</div>
			</div>

			{/* ****************************************************************** */}
			{/* *****   What is digital lending SECTION     ****** */}
			{/* ***************************************************************** */}

			<div className="page1-whatIsDigital text-center pt-5 pb-5 ">
				<div className="px-4" style={{ maxWidth: "700px", margin: "auto" }}>
					<div className="page1-whatIsDigitalHeading">
						What is Digital Lending?
					</div>

					<div className="page1-whatIsDigitalText mt-4">
						Digital Lending offers a fast and flexible alternative to the
						traditional banks.
					</div>

					<div className="page1-whatIsDigitalText mt-4">
						Digital Lending matches lenders with approved borrowers in a safe
						environment and creates legal contracts between those parties.
					</div>

					<div className="page1-whatIsDigitalText mt-4">
						Since Digital Lending companies operate online, they can run with
						lower overhead and provide services more efficiently than
						traditional financial institutions. As a result, lenders can earn
						higher returns, while borrowers can access funds much more quickly
						than they would through traditional banks.
					</div>
				</div>
			</div>

			{/* ****************************************************************** */}
			{/* *****   advantage of flenders SECTION     ****** */}
			{/* ***************************************************************** */}

			<div className="page1-advantageOfFlendersWrapperDiv pb-5 ps-xl-5 ">
				<div className="container">
					{/*  */}
					<div className="page1-advantageOfFlendersHeading text-center py-5">
						Advantages of Finance with Flender
					</div>
					{/* 2 bullet point boxes */}
					<div className="row pb-5 ps-xl-5">
						{/* box1 */}

						<div className="col-sm-6 ps-4">
							<div className="page1-advantageOfFlendersTextMain mb-1">
								For Borrowers
							</div>
							<ul className="ps-5">
								<li className="page1-advantageOfFlendersText page1-advantageOfFlendersLI">
									Simple transparent process
								</li>
								<li className="page1-advantageOfFlendersText page1-advantageOfFlendersLI">
									Decisions within 24 hours
								</li>
								<li className="page1-advantageOfFlendersText page1-advantageOfFlendersLI">
									No paperwork
								</li>
								<li className="page1-advantageOfFlendersText page1-advantageOfFlendersLI">
									Flexible terms
								</li>
								<li className="page1-advantageOfFlendersText page1-advantageOfFlendersLI">
									Great rates
								</li>
							</ul>
						</div>

						{/* box2 */}

						<div className="col-sm-6 ps-4  mt-3 mt-sm-0">
							<div className="page1-advantageOfFlendersTextMain mb-1">
								For Investors
							</div>
							<ul className="ps-5">
								<li className="page1-advantageOfFlendersText page1-advantageOfFlendersLI">
									Rigorous credit checking process
								</li>
								<li className="page1-advantageOfFlendersText page1-advantageOfFlendersLI">
									Auto-invest using AutoFlend
								</li>
								<li className="page1-advantageOfFlendersText page1-advantageOfFlendersLI">
									Excellent rates of return
								</li>
								<li className="page1-advantageOfFlendersText page1-advantageOfFlendersLI">
									Diversified investments
								</li>
								<li className="page1-advantageOfFlendersText page1-advantageOfFlendersLI">
									No fees
								</li>
							</ul>
						</div>

						{/* end of row */}
					</div>
				</div>
			</div>

			{/* ****************************************************************** */}
			{/* *****   2x Referalls SECTION     ****** */}
			{/* ***************************************************************** */}

			<div className="page1-refWrapper ">
				<div className="row p-0 m-0">
					{/* box1 */}

					<div className="col-12 col-md-6 page1-refBoxes p-0 m-0">
						<div className="page1-refImg1"></div>
						<div className="page1-regGreenBox text-center text-md-end px-4 pt-4">
							<div className="page1-refQuoteText">
								&#8220;We didn&apos;t want to lose any time in seizing a market
								opportunity and Flender funded us within 24 hours. This is a
								game changer for SMEs wanting to get on with growing their
								businesses right away.&#8221;
							</div>
							<div className="page1-refReferenceText mt-3">
								Lorraine Scroope, The Hire Lab
							</div>
						</div>
					</div>

					{/* box2 */}

					<div className="col-12 col-md-6 page1-refBoxes p-0 m-0">
						<div className="page1-refImg2"></div>
						<div className="page1-regGreenBox text-center text-md-end px-4 pt-4">
							<div className="page1-refQuoteText">
								&#8220;Flender has really helped our small business by offering
								backing with finance opportunities. It has greatly boosted our
								confidence in our growth and enhanced our belief in what we want
								to achieve with our brand. I would highly recommend Flender to
								anyone.&#8221;
							</div>
							<div className="page1-refReferenceText mt-3">
								Caolan Cullen, Arctic Stone
							</div>
						</div>
					</div>

					{/* end of row */}
				</div>
			</div>

			{/* ****************************************************************** */}
			{/* *****   awards SECTION     ****** */}
			{/* ***************************************************************** */}

			<div className="page1-awardsDiv pb-5 ">
				<div className="page1-awardsHeader text-center pt-5 pb-4">
					Our Awards
				</div>
				<div className="container  px-5">
					<div className="d-flex flex-column flex-lg-row justify-content-md-evenly align-items-center">
						<div className="page1-awardsImgWrapper ">
							<Image
								src="https://flender.ie/assets/spider_winner_logo-fbcea667c4c76cc7edc53045661b1a3af9236a9b495c71fbb86c61c1b0042a57.svg"
								layout="fill"
								alt=""
							/>
						</div>
						<div className="page1-awardsImgWrapper  mt-4 my-lg-0">
							<Image
								src="https://flender.ie/assets/ecommerce_award-25da97d01c409a4796fd31d618e5d8a8c262de3bb49088961e94e7a85626ccf6.png "
								layout="fill"
								alt=""
							/>
						</div>
					</div>
				</div>
			</div>

			{/* ****************************************************************** */}
			{/* *****   Secure, Safe, Transparent SECTION     ****** */}
			{/* ***************************************************************** */}

			<div className="page1-secureSafeWrapper ">
				<div className="container  py-5">
					<div className="row">
						<div className="col-md-4 text-center ">
							<Image
								src="/images/page1-flender-index/secureLockImage.png"
								alt=""
								height="65px"
								width="65px"
							/>
							<div className="page1-secureSafeHeadingText mt-2">Secure</div>
							<div className="mt-2 d-flex justify-content-center align-items-center">
								<div
									className="page1-secureSafeText"
									style={{ maxWidth: "236px" }}
								>
									Your data is protected and GDPR compliant
								</div>
							</div>
						</div>

						<div className="col-md-4 text-center mt-5 mt-md-0 ">
							<Image
								src="/images/page1-flender-index/safeshieldicon.png"
								alt=""
								height="65px"
								width="65px"
							/>
							<div className="page1-secureSafeHeadingText mt-2">Safe</div>
							<div className="mt-2 d-flex justify-content-center align-items-center">
								<div
									className="page1-secureSafeText"
									style={{ maxWidth: "280px" }}
								>
									Your data is safe and checking your eligibility for a Flender
									loan won&apos;t affect your credit score
								</div>
							</div>
						</div>

						<div className="col-md-4 text-center mt-5 mt-md-0 ">
							<Image
								src="/images/page1-flender-index/transparentMagnifyingGlassIcon.png"
								alt=""
								height="65px"
								width="65px"
							/>
							<div className="page1-secureSafeHeadingText mt-2">Safe</div>
							<div className="mt-2 d-flex justify-content-center align-items-center">
								<div className="page1-secureSafeText">
									Our rates and fees are clear
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* ****************************************************************** */}
			{/* *****   inMedia SECTION     ****** */}
			{/* ***************************************************************** */}

			<div className="page1-inMediaDiv ">
				<div className="page1-inMediaHeader text-center pt-5 px-5">
					Flender in the media
				</div>

				<div className="d-flex justify-content-center align-items-center">
					<div className="d-flex flex-wrap justify-content-center align-items-center">
						<div className="page1-inMediaImageHolder d-flex justify-content-center align-items-center">
							<Image
								src="/images/page1-flender-index/businessWorldWhite.png"
								alt=""
								width="166px"
								height="28px"
							/>
						</div>
						<div className="page1-inMediaImageHolder d-flex justify-content-center align-items-center">
							<Image
								src="/images/page1-flender-index/p2pWhiteIcon.png"
								alt=""
								width="136px"
								height="49px"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* ****************************************************************** */}
			{/* *****   Footer SECTION     ****** */}
			{/* ***************************************************************** */}

			<section className="pt-5 px-3">
				<div className="container ">
					<span className="page1-flenderLogo">Flender</span>

					{/* footer Nav goes here */}
					<div className='page1-footerNavWrapperLargeScreen'>
						{/* row 1 */}
						<div className="d-flex mt-2">
							<div
								className="page1-footerNavText"
								style={{ width: "112px", borderRight: "1px solid #999999" }}
							>
								Business loans
							</div>
							<div
								className="page1-footerNavText text-center"
								style={{ width: "112px", borderRight: "1px solid #999999" }}
							>
								Invest
							</div>

							<div
								className="page1-footerNavText text-center"
								style={{ width: "112px", borderRight: "1px solid #999999" }}
							>
								FAQ
							</div>
							<div
								className="page1-footerNavText text-center"
								style={{ width: "112px" }}
							>
								About Us
							</div>
						</div>

						{/* row 2 */}
						<div className="d-flex mt-2">
							<div
								className="page1-footerNavText"
								style={{ width: "112px", borderRight: "1px solid #999999" }}
							>
								Terms of Service
							</div>
							<div
								className="page1-footerNavText text-center"
								style={{ width: "112px", borderRight: "1px solid #999999" }}
							>
								Cookie Policy
							</div>

							<div
								className="page1-footerNavText text-center"
								style={{ width: "112px", borderRight: "1px solid #999999" }}
							>
								Privacy Policy
							</div>
							<div
								className="page1-footerNavText text-center"
								style={{ width: "112px" }}
							>
								Partnership
							</div>
						</div>
					</div>
					{/* end of footer nav */}

{/* start of footer version 2 */}

<div className="page1-footerNavWrapSmall mt-2">
	<div className='page1-footerNavText mb-2 pb-2' style={{borderBottom: '1px solid #999999'}}>Business Loans</div>
	<div className='page1-footerNavText mb-2 pb-2' style={{borderBottom: '1px solid #999999'}}>Invest</div>
	<div className='page1-footerNavText mb-2 pb-2' style={{borderBottom: '1px solid #999999'}}>FAQ</div>
	<div className='page1-footerNavText mb-2 pb-2' style={{borderBottom: '1px solid #999999'}}>About Us</div>
	<div className='page1-footerNavText mb-2 pb-2' style={{borderBottom: '1px solid #999999'}}>Terms of Service</div>
	<div className='page1-footerNavText mb-2 pb-2' style={{borderBottom: '1px solid #999999'}}>Cookie Policy</div>
	<div className='page1-footerNavText mb-2 pb-2' style={{borderBottom: '1px solid #999999'}}>Private Policy</div>
	<div className='page1-footerNavText mb-2 pb-2' style={{borderBottom: '1px solid #999999'}}>Partnership</div>
</div>


					{/* end of footer version 2 */}
					<div className="page1-footerText mt-3">
						<i className="bi bi-info-circle-fill"></i>&nbsp; With P2P lending
						your capital is at risk. Flender is not covered by the Deposit
						Guarantee Scheme or the Investor Compensation Scheme in Ireland.
					</div>

					<div className="page1-footerText mt-3">
						Use of this website is subject to our{" "}
						<span className="page1-footerLink" onClick={demoPageAlert}>
							Privacy Policy
						</span>
						,{" "}
						<span className="page1-footerLink" onClick={demoPageAlert}>
							Cookie Policy
						</span>{" "}
						and
						<span className="page1-footerLink" onClick={demoPageAlert}>
							{" "}
							Terms of Service
						</span>
						. <br />
						Flender Ireland Limited is a Company registered in Ireland with
						company number 594119. Registered office Riverside One, Sir John
						Rogerson&apos;s Quay, Dublin 2, Ireland.
					</div>

					<div className="page1-footerText mt-3">
						Contact the Flender team at{" "}
						<span className="page1-footerLink" onClick={demoPageAlert}>
							info@flender.ie
						</span>{" "}
						or call us on{" "}
						<span className="page1-footerLink" onClick={demoPageAlert}>
							(01) 551 0716
						</span>
						. <br />
						Flender ® is a registered trademark of NKK Finance Ltd. © 2022. All
						rights reserved.
					</div>

					{/* end of container */}
				</div>
			</section>

			{/* ****************************************************************** */}
			{/* *****   empty section for footer SECTION     ****** */}
			{/* ***************************************************************** */}

			<section className="p-5">
				<div className="container">{/* end of container */}</div>
			</section>
		</React.Fragment>
	);
};

export default Page1FlenderIEIndex;
