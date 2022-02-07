import Link from "next/link";
import Image from "next/image";
import { allProjects } from "../allMyProjectsDatabase";

// components
import Meta from "../components/Meta";
import React from "react";

export default function Home() {
	return (
		<React.Fragment>
			<Meta
				obj={{
					titleStr: "Table of Content",
					descriptionStr: "all pages, 1 by 1",
					keywordsStr: "react, next, js, ts",
					faviconUrl: "/red_small.png",
				}}
			/>

			<div className="totalProjectWrapper p-4 p-sm-5">
				<h1 className='tableOfContentHeader'>One page per day projects</h1>
				<br />
				{allProjects.map((value, index) => {
					const { name, difficulty, technology } = value;
					return (
						<div key={index}>
							<hr />
							<div className="d-flex flex-wrap">
								{/* image box1 */}
								<Link href="/page1-flender-ie-index">
									<a target="_blank">
										<div className="tableOfContentImageWrap mb-1">
											<Image
												src="/images/page1-flender-index/page1-flender-index.png"
												layout="fill"
												alt=""
											/>
										</div>
									</a>
								</Link>
								{/* project info box */}
								<div
									className="ps-sm-3 pt-3 pt-sm-0"
									style={{ maxWidth: "320px" }}
								>
									<div className="">
										<strong>Page number:</strong> {index + 1}
									</div>
									<div className="pt-2">
										<strong>Name:</strong> {name}
									</div>
									<div className="pt-2">
										<strong>Difficulty: </strong>
										{difficulty}
									</div>
									<div className="pt-2">
										<strong>Technology: </strong>
										{technology}
									</div>
									<div className="pt-2">
										<strong>Demo link: </strong>
										<Link href="/page1-flender-ie-index">
											<a target="_blank">
												See project here<i className="bi bi-link-45deg"></i>
											</a>
										</Link>
									</div>
								</div>
								{/* end of flex */}
							</div>
						</div>
					);
				})}

				{/* end of total project wrapper */}
			</div>
		</React.Fragment>
	);
}
