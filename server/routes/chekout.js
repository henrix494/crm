const fetch = require("node-fetch");

async function chekout(req, res) {
	const { name, phone, currentItem, amountOne, amountTwo } = await req.body;

	try {
		const requestBody = {
			Key: process.env.zcredit,
			Local: "He",
			UniqueId: "",
			SuccessUrl: "https://www.kapit-coffee.com/",
			CancelUrl: "",
			CallbackUrl: "",
			PaymentType: "regular",
			CreateInvoice: "false",
			AdditionalText: "",
			ShowCart: "true",
			ThemeColor: "005ebb",
			BitButtonEnabled: "true",
			ApplePayButtonEnabled: "true",
			GooglePayButtonEnabled: "true",
			Installments: {
				Type: "regular",
				MinQuantity: "1",
				MaxQuantity: "12",
			},
			Customer: {
				Email: "someone@gmail.com",
				Name: name,
				PhoneNumber: phone,
				HolderId: "",
				Attributes: {
					HolderId: "required",
					Name: "required",
					PhoneNumber: "required",
					Email: "optional",
				},
			},
			CartItems: [
				{
					Amount:
						currentItem === "/src/assets/doble.png" ||
						currentItem === "/assets/doble-cec3014e.png"
							? 1699
							: 1499,
					Currency: "ILS",
					Name:
						currentItem === "/src/assets/doble.png" ||
						currentItem === "/assets/doble-cec3014e.png"
							? "מכונת קפה פלוס מטחנת קפה"
							: " BRL 3605 מכונת קפה ",
					Description:
						currentItem === "/src/assets/doble.png" ||
						currentItem === "/assets/doble-cec3014e.png"
							? "חבילת קפה שכלול בה מכונת קפה שלנו פלוס מטכנת קפה לחווית קפה מושלמת"
							: "מכונת קפה ידנית לחווית קפה מושלמת",
					Quantity:
						currentItem === "/src/assets/doble.png" ||
						currentItem === "/assets/doble-cec3014e.png"
							? amountTwo
							: amountOne,
					Image:
						currentItem === "/src/assets/doble.png" ||
						currentItem === "/assets/doble-cec3014e.png"
							? "https://www.kapit-coffee.com/assets/doble-cec3014e.png"
							: "https://www.kapit-coffee.com/assets/Gemilai-CRM3605-2022pp-bda5843b.png",
					IsTaxFree: "false",
					AdjustAmount: "false",
				},
			],
			FocusType: "None",
			CardsIcons: {
				ShowVisaIcon: "true",
				ShowMastercardIcon: "true",
				ShowDinersIcon: "true",
				ShowAmericanExpressIcon: "true",
				ShowIsracardIcon: "true",
			},
			IssuerWhiteList: [1, 2, 3, 4, 5, 6],
			BrandWhiteList: [1, 2, 3, 4, 5, 6],
			UseLightMode: "false",
			UseCustomCSS: "false",
			BackgroundColor: "FFFFFF",
			ShowTotalSumInPayButton: "true",
			ForceCaptcha: "false",
		};

		const zCreditResponse = await fetch(
			"https://pci.zcredit.co.il/webcheckout/api/WebCheckout/CreateSession/",
			{
				method: "POST",
				headers: { "Content-Type": "application/json " },
				body: JSON.stringify(requestBody),
			}
		);

		const zCreditData = await zCreditResponse.json();
		console.log(zCreditData);
		res.status(200).json({ sessionUrl: zCreditData });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "An error occurred." });
	}
}

module.exports = {
	chekout,
};
