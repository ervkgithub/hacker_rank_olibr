import React from "react";
import "./index.css";

export default function InstructionBoard() {

	return (
		<div className="mt-50 layout-column justify-content-center align-items-center">
			<div>
				<form>
					<section
						className="my-30 layout-row align-items-center justify-content-center width-1000"
					>
						<input
							id="instruction-input"
							type="text"
							placeholder="New Instruction"
							data-testid="instruction-input"
							className="width-80"
						/>
						<button
							type="submit"
							className="ml-30 width-20"
							data-testid="add-instruction-button"
						>
							Add Instruction
						</button>
					</section>
				</form>
				<span data-testid="error-message" className="error hidden-span">{ }</span>
			</div>
			<div className="card outlined mt-0 width-800" >
				<div className="card-text" >
					<h4>Instructions</h4>
					<ul className="styled mt-50" data-testid="instructions">
						<li>
							<div className="li-content layout-row justify-content-between align-items-center">
								<span>1</span>
								<span>Instruction-1</span>
								<div className="icons">
									<button className="icon-only x-medium mx-2">
										<i className="material-icons">arrow_drop_down_icon</i>
									</button>
									<button className="icon-only x-medium mx-2">
										<i className="material-icons">arrow_drop_up_icon</i>
									</button>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
