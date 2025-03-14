
import Container from "./components/container";
import { selectedPropertyResponse } from "./selected-property.dto";

const Page = () => {
	const response = selectedPropertyResponse;

	return <Container data={response}/>;
};

export default Page;
