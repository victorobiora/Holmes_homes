import * as Yup from "yup";

const newPasswordSchema = Yup.string()
  .required('Password is required')
  .matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    'Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, and at least one digit or special character. It cannot contain a period or newline.'
  )

const confirmPasswordSchema = Yup.string()
	.required("Please confirm your password")
	.oneOf(
		[Yup.ref("password"), Yup.ref("password", undefined)],
		"Passwords must match",
	);



const numbersOnlySchema = (text: string) =>
	Yup.string()
		.required(`${text} is required`)
		.matches(/^\d+$/, `${text} must contain only numbers`);

export { confirmPasswordSchema, newPasswordSchema, numbersOnlySchema };




