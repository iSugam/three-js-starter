import "./style.css";
import texture from "./assets/textures/2k_earth_daymap_depth_map.jpg"
import alphaTexture from "./assets/textures/2k_earth_daymap_1_depth.png"
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// Add webgl Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Add renderer to the body
document.body.appendChild(renderer.domElement);

// Resize the rendering and camera as per window's width and height
window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix()
});


// Add Scene and camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0,0.1, 3) // x, y, and z positions

// Create earth geometry and add the texture material to it and combine it with THREE.Mesh
const earthGeometry = new THREE.SphereGeometry( 1, 100, 100 );
const textures = new THREE.TextureLoader().load(texture) // Load Texture image
const material = new THREE.MeshStandardMaterial( {map: textures} );

const earth = new THREE.Mesh( earthGeometry, material );
scene.add( earth );

// Add orbit controls to camera
const controls = new OrbitControls( camera, renderer.domElement );
controls.update();

// Add Directional Light
const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5)
directionalLight.position.x = 2;
scene.add(directionalLight);

// Recursive function to keep re-rendering
function animate() {
    requestAnimationFrame(animate);
    earth.rotation.y += 0.003;
    controls.update();
    renderer.render(scene, camera);
}
animate()