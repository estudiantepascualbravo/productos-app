import { collection, doc, setDoc, getDocs } from 'firebase/firestore/lite';
import { FirebaseFirestore } from '../config/firebase';

const crearProducto = async (producto) => {
    const nuevoDoc = doc(collection(FirebaseFirestore, '/prods'));
    await setDoc(nuevoDoc, producto); // llamado asincrono a firebase para guardar
    console.log('producto creado');
}

const listarProductos = async () => {
    console.log('aqui');
    const productosRef = collection(FirebaseFirestore, '/prods');
    // arreglo de documentos de la collecion de productos
    const docs = await getDocs(productosRef); // llamado a la base de datos firestore
    const productos = [];
    docs.forEach(document => {
        console.log(document.id, document.data());
        productos.push({ id: document.id, 
            nombre: document.data().nombre,
            inventario: document.data().inventario,
            precio: document.data().precio,
            imagen: document.data().imagen
        });
    });
    console.log(productos);
    return productos;
}

export {
    crearProducto,
    listarProductos,
}