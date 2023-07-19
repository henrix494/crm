const fetch = require("node-fetch");

async function chekout(req, res) {
	const { name, phone, currentItem, amountOne, amountTwo } = await req.body;

	try {
		console.log(currentItem);
		const requestBody = {
			Key: process.env.zcredit,
			Local: "He",
			UniqueId: "",
			SuccessUrl: "",
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
				Attributes: {
					HolderId: "none",
					Name: "required",
					PhoneNumber: "required",
					Email: "optional",
				},
			},
			CartItems: [
				{
					Amount: currentItem === "/src/assets/doble.png" ? 1699 : 1499,
					Currency: "ILS",
					Name: "My Item1 Name",
					Description: "My Item description , comes below the name",
					Quantity:
						currentItem === "/src/assets/doble.png" ? amountTwo : amountOne,
					Image:
						currentItem === "/src/assets/doble.png"
							? "https://www.kapit-coffee.com/assets/doble-cec3014e.png"
							: "https://www.kapit-coffee.com/assets/coffe-00a415b7.png",
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
		res.status(200).json({ sessionUrl: zCreditData.Data.SessionUrl });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "An error occurred." });
	}
}

module.exports = {
	chekout,
};
