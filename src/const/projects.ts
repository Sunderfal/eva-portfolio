import type { Project } from "@interfaces/types";
import cartoonCharacterDesign1 from "@assets/images/projects/cartoon_character_design.webp";
import charactersDesign from "@assets/images/projects/characters_design.webp";
import demoReel from "@assets/images/projects/demo_reel.webp";
import environment3d from "@assets/images/projects/environment_3d.webp";
import environmentAndProps3dModeled from "@assets/images/projects/environment_and_props_3d_modeled.webp";
import groupMissionBoard from "@assets/images/projects/group_mission_board.webp";
import illustrations from "@assets/images/projects/illustrations.webp";
import laCabrera from "@assets/images/projects/la_cabrera.webp";
import swiftDrinkGoatBerry from "@assets/images/projects/swift_drink_goat_berry.webp";
import demoReelVideo from "@assets/video/demo_reel.mp4";
import board1 from "@assets/images/group-mission-board/board_1.webp";
import board2 from "@assets/images/group-mission-board/board_2.webp";
import board3 from "@assets/images/group-mission-board/board_3.webp";
import board4 from "@assets/images/group-mission-board/board_4.webp";
import board5 from "@assets/images/group-mission-board/board_5.webp";
import characterDesign1 from "@assets/images/characters-design/characters_design_1.webp";
import characterDesign2 from "@assets/images/characters-design/characters_design_2.webp";
import characterDesign3 from "@assets/images/characters-design/characters_design_3.webp";
import characterDesign4 from "@assets/images/characters-design/characters_design_4.webp";
import environmentProps3d1 from "@assets/images/environment-props-3d/environment_props_3d_1.webp";
import environmentProps3d2 from "@assets/images/environment-props-3d/environment_props_3d_2.webp";
import environmentProps3d3 from "@assets/images/environment-props-3d/environment_props_3d_3.webp";
import environment3d1 from "@assets/images/environment-3d/environment_3d_1.webp";
import environment3d2 from "@assets/images/environment-3d/environment_3d_2.webp";
import cartoonCharacterDesign2 from "@assets/images/cartoon-character-design/cartoon_character_design.webp";
import cartoonCharacterDesignVideo1 from "@assets/video/cartoon_character_design_1.mp4";
import cartoonCharacterDesignVideo2 from "@assets/video/cartoon_character_design_2.mp4";
import cartoonCharacterDesignVideo3 from "@assets/video/cartoon_character_design_3.mp4";
import laCabrera2 from "@assets/images/la-cabrera/la_cabrera_1.webp";
import laCabrera3 from "@assets/images/la-cabrera/la_cabrera_2.webp";
import laCabrera4 from "@assets/images/la-cabrera/la_cabrera_3.webp";
import laCabrera5 from "@assets/images/la-cabrera/la_cabrera_4.webp";
import laCabrera6 from "@assets/images/la-cabrera/la_cabrera_5.webp";
import laCabrera7 from "@assets/images/la-cabrera/la_cabrera_6.webp";
import laCabreraVideo from "@assets/video/la_cabrera.mp4";
import illustration2 from "@assets/images/illustrations/illustrations_1.webp";
import illustration3 from "@assets/images/illustrations/illustrations_2.webp";
import illustration4 from "@assets/images/illustrations/illustrations_3.webp";
import illustration5 from "@assets/images/illustrations/illustrations_4.webp";
import illustration6 from "@assets/images/illustrations/illustrations_5.webp";
import illustration7 from "@assets/images/illustrations/illustrations_6.webp";
import swiftDrinkGoatBerry2 from "@assets/images/goat-drink/swift_drink_goat_berry_1.webp";
import swiftDrinkGoatBerry3 from "@assets/images/goat-drink/swift_drink_goat_berry_2.webp";
import swiftDrinkGoatBerry4 from "@assets/images/goat-drink/swift_drink_goat_berry_3.webp";

export const projects: Project[] = [
    { 
        idName: "demo-reel", 
        title: "Demo Reel", 
        image: demoReel,
        info: {
            videos: [demoReelVideo]
        }
    },
    { 
        idName: "group-mission-board", 
        title: "Group Mission Board", 
        image: groupMissionBoard,
        info: {
            description: "Stylized clan and group quest board designed for a multiplayer fantasy game. Modeled in Blender and textured using both Blender and Photoshop, with hand-painted details and post-editing to enhance readability and visual appeal.",
            images: [
                board1,
                board2,
                board3,
                board4,
                board5
            ]
        }
    },
    { 
        idName: "characters-design", 
        title: "Characters design", 
        image: charactersDesign,
        info: {
            description: "A collection of character design sketches and digital illustrations, exploring different styles, expressions, and personalities.",
            images: [
                characterDesign1,
                characterDesign2,
                characterDesign3,
                characterDesign4
            ]
        }
    },
    { 
        idName: "environment-and-props-3d-modeled", 
        title: "Environment and props 3D modeled", 
        image: environmentAndProps3dModeled,
        info: {
            description: "A cozy tavern environment fully modeled in Blender, including all props.",
            images: [
                environmentProps3d1,
                environmentProps3d2,
                environmentProps3d3
            ]
        }
    },
    { 
        idName: "environment-3d", 
        title: "Environment 3D", 
        image: environment3d,
        info: {
            description: "Modelling, texturing and lighting in blender by me. Inspired by one of the houses in the village of kakariko in the videogame Zelda Tears of The Kingdom.",
            images: [
                environment3d1,
                environment3d2
            ]
        }
    },
    { 
        idName: "cartoon-character-design", 
        title: "Cartoon character design", 
        image: cartoonCharacterDesign1,
        info: {
            description: "3D design of a character that I created, started with a concept art and then created it in 3D. I also animated it in a idle pose.",
            images: [cartoonCharacterDesign2],
            videos: [
                cartoonCharacterDesignVideo1,
                cartoonCharacterDesignVideo2,
                cartoonCharacterDesignVideo3
            ]
        }
    },
    { 
        idName: "la-cabrera-videogame", 
        title: "La Cabrera [Videogame]", 
        image: laCabrera,
        info: {
            description: "This project was developed during the first months of our internship at the company BeByte. It was commissioned by La Cabrera, a renowned restaurant originally from Argentina, and assigned to us—a team of three interns.In this project, I served as both the game designer and the illustrator, responsible for concept art as well as GUI and HUD design. We also had the opportunity to meet La Cabrera's head chef, Gastón, and enjoy a meal at their restaurant in Málaga.",
            images: [
                laCabrera2,
                laCabrera3,
                laCabrera4,
                laCabrera5,
                laCabrera6,
                laCabrera7
            ],
            videos: [laCabreraVideo]
        }
    },
    { 
        idName: "illustrations", 
        title: "Illustrations", 
        image: illustrations,
        info: {
            description: "A selection of commissioned digital illustrations in various styles and themes; Silent Hill 2, One Piece, etc.",
            images: [
                illustration2,
                illustration7,
                illustration3,
                illustration4,
                illustration5,
                illustration6
            ]
        }
    },
    { 
        idName: "swift-drink-goat-berry", 
        title: "Swift drink GOAT BERRY", 
        image: swiftDrinkGoatBerry,
        info: {
            description: "Project commissioned by a 200K+ member game group, based on Warhammer. Concept art and logo of the beverage to then be transferred to the original template, and released to the shop.",
            images: [
                swiftDrinkGoatBerry2,
                swiftDrinkGoatBerry3,
                swiftDrinkGoatBerry4
            ]
        } 
    }
];

