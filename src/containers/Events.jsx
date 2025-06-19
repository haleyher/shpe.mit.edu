// Events.jsx
import React, { Component } from 'react';
import '../styles.css';

class Events extends Component {
	render() {
		return (
			<div className="events">
				<center><h1>Upcoming Fall 2025 Event: </h1>
				<h2>Algoed x SHPE Competition</h2></center>
				
				{/* Begin Instagram Embed */}
				<blockquote
					className="instagram-media"
					// data-instgrm-captioned
					data-instgrm-permalink="https://www.instagram.com/p/DLEvyZROtgq/?utm_source=ig_embed&amp;utm_campaign=loading"
					data-instgrm-version="14"
					style={{
						background: '#FFF',
						border: 0,
						borderRadius: '3px',
						boxShadow:
							'0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
						margin: '1px',
						maxWidth: '540px',
						minWidth: '326px',
						padding: 0,
						width: '99.375%',
					}}
				>
					<div style={{ padding: '16px' }}>
						<a
							href="https://www.instagram.com/p/DLEvyZROtgq/?utm_source=ig_embed&amp;utm_campaign=loading"
							style={{
								background: '#FFFFFF',
								lineHeight: 0,
								padding: 0,
								textAlign: 'center',
								textDecoration: 'none',
								width: '100%',
							}}
							target="_blank"
							rel="noreferrer"
						>
							{/* Instagram loading placeholder */}
							<div
								style={{
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
								}}
							>
								<div
									style={{
										backgroundColor: '#F4F4F4',
										borderRadius: '50%',
										height: '40px',
										marginRight: '14px',
										width: '40px',
									}}
								/>
								<div
									style={{
										display: 'flex',
										flexDirection: 'column',
										flexGrow: 1,
										justifyContent: 'center',
									}}
								>
									<div
										style={{
											backgroundColor: '#F4F4F4',
											borderRadius: '4px',
											height: '14px',
											marginBottom: '6px',
											width: '100px',
										}}
									/>
									<div
										style={{
											backgroundColor: '#F4F4F4',
											borderRadius: '4px',
											height: '14px',
											width: '60px',
										}}
									/>
								</div>
							</div>

							<div style={{ padding: '19% 0' }} />

							<div
								style={{
									display: 'block',
									height: '50px',
									margin: '0 auto 12px',
									width: '50px',
								}}
							>
								<svg
									width="50px"
									height="50px"
									viewBox="0 0 60 60"
									xmlns="http://www.w3.org/2000/svg"
								>
									{/* loader path */}
									<g
										stroke="none"
										fill="none"
										fillRule="evenodd"
										transform="translate(-511.000000, -20.000000)"
									>
										<path
											d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886"
											fill="#000"
										/>
									</g>
								</svg>
							</div>

							<div style={{ paddingTop: '8px' }}>
								<div
									style={{
										color: '#3897f0',
										fontFamily: 'Arial,sans-serif',
										fontSize: '14px',
										fontWeight: 550,
										lineHeight: '18px',
									}}
								>
									View this post on Instagram
								</div>
							</div>
						</a>

						<p
							style={{
								color: '#c9c8cd',
								fontFamily: 'Arial,sans-serif',
								fontSize: '14px',
								lineHeight: '17px',
								marginBottom: 0,
								marginTop: '8px',
								overflow: 'hidden',
								padding: '8px 0 7px',
								textAlign: 'center',
								textOverflow: 'ellipsis',
								whiteSpace: 'nowrap',
							}}
						>
							<a
								href="https://www.instagram.com/p/DLEvyZROtgq/?utm_source=ig_embed&amp;utm_campaign=loading"
								style={{
									color: '#c9c8cd',
									fontFamily: 'Arial,sans-serif',
									fontSize: '14px',
									fontWeight: 'normal',
									lineHeight: '17px',
									textDecoration: 'none',
								}}
								target="_blank"
								rel="noreferrer"
							>
								A post shared by AlgoEd | Platform for Competitions
								(@algoed.official)
							</a>
						</p>
					</div>
				</blockquote>
				{/* End Instagram Embed */}

				<iframe
					title="calendar"
					src="https://calendar.google.com/calendar/embed?src=latinoculturalcenter%40gmail.com&ctz=America%2FNew_York"
					className="nice-border calendar"
					width="800"
					height="600"
					frameBorder="0"
					scrolling="no"
				/>

				<p style={{ marginBottom: '100px' }}>Add this calendar!!</p>

			</div>
		);
	}
}

export default Events;

