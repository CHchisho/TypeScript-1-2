export {}; // hack to ignore Book from task 3
// TODO Define the 'ElectronicDevice' type (or interface)
type ElectronicDevice = {
	type: 'electronic';
	brand: string;
	model: string;
};

// Define the 'Book' type (or interface)
type Book = {
	type: 'book';
	title: string;
	author: string;
};

// Define the 'Product' type alias that can represent either 'ElectronicDevice' or 'Book'
type Product = ElectronicDevice | Book;



// Implement instances of the 'Product' type
function createElectronicDevice(): ElectronicDevice {
	// TODO: Prompt user for electronic device details (brand and model)
	const brand = prompt("Enter brand:") || "";
	const model = prompt("Enter model:") || "";

	// TODO: return object containing brand and model
	const electronicDevice: ElectronicDevice = {
		type: 'electronic',
		brand, 
		model
	};
	return electronicDevice;
}

function createBook(): Book {
	// TODO: Prompt user for book details (title and author)
	const title = prompt("Enter title:") || "";
	const author = prompt("Enter author:") || "";
	// TODO: return object containing title and author
	const book: Book = {
		type: 'book',
		title, 
		author
	};
	return book;
}

// Create instances of 'Product'
const electronicProduct = createElectronicDevice();
const bookProduct = createBook();

// Display the details of each product
function displayProductDetails(product: Product) {
	console.log(`Product Type: ${product.type}`);
	if (product.type === 'electronic') {
		console.log(`Brand: ${product.brand}`);
		console.log(`Model: ${product.model}`);
	} else {
		console.log(`Title: ${product.title}`);
		console.log(`Author: ${product.author}`);
	}
}

console.log('Electronic Device Details:');
displayProductDetails(electronicProduct);

console.log();

console.log('Book Details:');
displayProductDetails(bookProduct);
