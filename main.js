import * as THREE from "three";

/**
 * First we need to create a scene
 * Then we need to create a camera
 * Then we need to create object meshes using geometry and material
 * Then we need to add the object meshes to the scene
 * Then we need to add lighting
 * Then we need to render the scene by creating a renderer
 */

// Create a scence 
const scene = new THREE.Scene();
//modify the background of the scene
scene.background = new THREE.Color("#F0F0F0");

//Add the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//Modify the position of the camera
camera.position.z = 5;

//Create an object mesh
//create the geometry first
const geometry = new THREE.BoxGeometry();
//create the material
const material = new THREE.MeshLambertMaterial({ color: 0x00ff00, emissive: 0x00ff00 });
//create the object mesh
const cube = new THREE.Mesh(geometry, material);
//add the object mesh to the scene
scene.add(cube);

//Add lighting
const light = new THREE.DirectionalLight(0x9CDBA6, 10);
//position the light 
light.position.set(1,1,1); 
//add the light to the scene
scene.add(light);

//Create the renderer
const renderer = new THREE.WebGLRenderer();
// set the size of the renderer
renderer.setSize(window.innerWidth, window.innerHeight);
//add the renderer to the DOM tree
document.body.appendChild(renderer.domElement);



//Create a function to animate the scene
 function animate() {
     requestAnimationFrame(animate);
    
//     // Add any animations here, e.g.:
         cube.rotation.x += 0.01;
         cube.rotation.y += 0.01;
    
        //In order to see the scene we have to render it 
        renderer.render(scene, camera);
   }
   animate();