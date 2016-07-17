// Type definitions for ros3d.js
// Project: http://wiki.ros.org/ros3djs
// Definitions by: Harmish Khambhaita <https://github.com/harmishhk/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped


/* ----------------------------------

 NOTE: This typescript definition is not yet complete.

 ---------------------------------- */

declare namespace ROS3D {
	export class Viewer {
		/**
		 * A Viewer can be used to render an interactive 3D scene to a HTML5 canvas.
		 *
		 * @constructor
		 * @param options - possible keys include:
     *   * divID - the ID of the div to place the viewer in
     *   * width - the initial width, in pixels, of the canvas
     *   * height - the initial height, in pixels, of the canvas
     *   * background (optional) - the color to render the background, like '#efefef'
     *   * antialias (optional) - if antialiasing should be used
     *   * intensity (optional) - the lighting intensity setting to use
     *   * cameraPosition (optional) - the starting position of the camera, possible keys include:
     *      * x - x-coordinate
     *      * y - y-coordinate
     *      * z - z-coordinate
		 */
		constructor(options:{
      divID: string,
      width: number,
      height: number,
      background?: string,
      antialias?: boolean,
      intensity?: number,
			cameraPosition?:{
        x: number,
        y: number,
        z: number
      }
		});

		/**
		 * Add the given THREE Object3D to the global scene in the viewer.
		 *
		 * @param object - the THREE Object3D to add
     * @param selectable - (optional) - if the object should be added to the selectable list
		 */
		addObject(object, selectable?: boolean):void;
	}
}

declare module "ROS3D" {
    export = ROS3D;
}
