import React, { useEffect } from 'react';
import {
    ArcRotateCamera,
    Engine,
    HDRCubeTexture,
    PBRMaterial,
    Scene,
    SceneLoader,
    Vector3,
    Animation
} from '@babylonjs/core';
import classes from './Mainwrap.module.css';
import obg from "../../img/robot.babylon";
import hdr from "../../img/studio_small_07_512.hdr";
import * as BABYLON from "@babylonjs/core";

function My3DScene() {
    useEffect(() => {
        const engine = new Engine(document.getElementById('canvas'), true);
        const scene = new Scene(engine);

        const hdrTexture = new HDRCubeTexture(hdr, scene, 512);
        scene.environmentTexture = hdrTexture;
        scene.clearColor = BABYLON.Color3.Black();
        // Вращение HDRI-текстуры перед каждым рендерингом
        let rotationY = 0;
        let rotationX = 0;
        scene.registerBeforeRender(() => {
            rotationY += 0.001;  // измените эту величину, чтобы управлять скоростью вращения
            hdrTexture.setReflectionTextureMatrix(BABYLON.Matrix.RotationY(rotationY));
        });

        const camera = new ArcRotateCamera('camera', Math.PI / -1.1, Math.PI / 3.2, 180, new Vector3(0, 0, 0), scene);
        camera.attachControl(document.getElementById('canvas'), true);

        const upperBetaLimit = Math.PI / 2.5;
        const lowerBetaLimit  = Math.PI / 1.8;

        const createAnimation = (target, property, startValue, endValue) => {
            const animation = new Animation(property + "Animation", property, 60, Animation.ANIMATIONTYPE_FLOAT, Animation.ANIMATIONLOOPMODE_CONSTANT); // Удвоенная длительность анимации
            const keys = [];
            keys.push({ frame: 0, value: startValue });
            keys.push({ frame: 60 * 20, value: endValue }); // Удвоенное количество кадров
            animation.setKeys(keys);
            return animation;
        }

        const alphaAnimation = createAnimation(camera, "alpha", camera.alpha, camera.alpha + Math.PI * 2);
        const betaAnimation1 = createAnimation(camera, "beta", lowerBetaLimit, upperBetaLimit);
        const betaAnimation2 = createAnimation(camera, "beta", upperBetaLimit, lowerBetaLimit);

        const setBetaAnimation = () => {
            scene.beginAnimation(camera, 0, 60 * 20, false, 0.77, () => {
                camera.animations = [alphaAnimation, betaAnimation2];
                setBetaAnimationReverse();
            });
        }

        const setBetaAnimationReverse = () => {
            scene.beginAnimation(camera, 0, 80 * 20, false, 0.77, () => {
                camera.animations = [alphaAnimation, betaAnimation1];
                setBetaAnimation();
            });
        }

        camera.animations = [alphaAnimation, betaAnimation1];
        setBetaAnimation();

        SceneLoader.ImportMesh(
            "",
            obg,
            "",
            scene,
            (meshes) => {
                const pbr = new PBRMaterial("pbr", scene);
                pbr.metallic = 1.0;
                pbr.roughness = 0.8;
                if (meshes[0]) {
                    meshes[0].material = pbr;
                }
            },
            null,
            (error) => {
                console.error("Error occurred while loading the model", error);
            }
        );

        engine.runRenderLoop(() => {
            scene.render();
        });
    }, []);

    return <canvas id="canvas" className={classes.mycanva} />;
}

export default My3DScene;
