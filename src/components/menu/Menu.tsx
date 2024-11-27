import './Menu.css'

import MenuButton from '../menu_button/MenuButton';

function Menu() {
	let buttons: string[] = [
		"about",
		"projects",
		"toolset",
		"contact"
	];

	return (
		<>
			<div className="flex flex-col justify-center items-center">
				{buttons.map((button) => (
					<div className="mb-6" key={button}>
						<MenuButton text={button} />
					</div>
				))}
			</div>
		</>
	);
}


export default Menu;
