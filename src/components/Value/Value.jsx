import "./Value.css";
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
	AccordionItemState,
} from "react-accessible-accordion";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion";
import { useState } from "react";

const Value = () => {
	return (
		<section className="v-wrapper" id="value">
			<div className="paddings innerWidth flexCenter v-container">
				<div className="v-left">
					<div className="image-container">
						<img src="./value.png" alt="value image" />
					</div>
				</div>

				<div className="flexColStart v-right">
					<span className="orangeText">Our Value</span>
					<span className="primaryText">Value We Give to You</span>
					<span className="secondaryText">
						We always ready to help by providijng the best services for you. We
						beleive a good blace to live can make your life better
					</span>

					<Accordion
						className="accordion"
						allowMultipleExpanded={false}
						preExpanded={[0]}
					>
						{data.map((item, i) => {
              const [className, setClassName] = useState(null)

							return (
								<AccordionItem key={i} className={`accordionItem ${className}`} uuid={i}>
									<AccordionItemHeading>
										<AccordionItemButton className="flexCenter accordionButton">
											<AccordionItemState>
												{({ expanded }) =>
													expanded
														? setClassName("expanded")
														: setClassName("collapsed")
												}
											</AccordionItemState>

											<div className="flexCenter icon">{item.icon}</div>
											<span className="primaryText">{item.heading}</span>
											<div className="flexCenter icon">
												<MdOutlineArrowDropDown size={20} />
											</div>
										</AccordionItemButton>
									</AccordionItemHeading>

									<AccordionItemPanel>
										<p className="secondaryText">{item.detail}</p>
									</AccordionItemPanel>
								</AccordionItem>
							);
						})}
					</Accordion>
				</div>
			</div>
		</section>
	);
};

export default Value;
