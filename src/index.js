import "./style.css";
import texture from "./assets/textures/2k_earth_daymap.jpg"
import * as THREE from "three";

// Add webgl Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

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
camera.position.set(0,0.1, 5) // x, y, and z positions

const earthGeometry = new THREE.SphereGeometry( 1, 100, 100 );
const textures = new THREE.TextureLoader().load(texture)
const material = new THREE.MeshStandardMaterial( {map: textures} );
const earth = new THREE.Mesh( earthGeometry, material );
scene.add( earth );

const directionalLight = new THREE.DirectionalLight(0xffffff, 2)
directionalLight.position.x = 1.5
scene.add(directionalLight)

function animate() {
    requestAnimationFrame(animate);
    earth.rotation.y += 0.01

    renderer.render(scene, camera);
}
animate()