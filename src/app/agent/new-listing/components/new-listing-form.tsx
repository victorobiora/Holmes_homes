import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { motion, AnimatePresence } from "framer-motion";
import ToggleButton from "@/library/buttons/toggle-button";
import downIcon from "@/assets/images/general/down-icon-black.svg";
import Image from "next/image";
import { DatePicker, Switch } from "@tremor/react";

const NewListingForm = () => {
	return (
		<section>
			<div className="flex justify-between">
				<div className="p-3 rounded-md bg-white ">
					<h1>Overview</h1>
					<Formik
						onSubmit={(values) => {}}
						initialValues={{
							property_description: "",
							property_title: "",
							category: "",
							listing_in: "",
							price: 0,
							yearly_tax_rate: 10,
							size_in_ft: 0,
							bedrooms: 0,
							bathrooms: 0,
							kitchens: 0,
							garages: 0,
							garage_sqt: 0,
							year_built: 0,
							floor_number: 0,
						}}
					></Formik>
				</div>
				<div className=""></div>
			</div>
		</section>
	);
};

export default NewListingForm;

