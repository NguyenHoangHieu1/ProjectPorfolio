import { PropsWithChildren } from "react"

const Techs: React.FC<PropsWithChildren> = (props) => {
	return (
		<section className="m-auto max-w-6xl">
			<h1>Technologies That I have learnt:</h1>
			<p>Here's a brief rundown of what I learnt through my journey</p>
			<ul>
				<li>
					<div>
						<h1>HTML,CSS,JAVASCRIPT</h1>
					</div>
					<div>
						<p></p>
					</div>
				</li>
			</ul>
		</section>
	)
}

export default Techs
