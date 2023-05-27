/*
 * @Author: curechen 981470148@qq.com
 * @Date: 2023-05-25 15:15:51
 * @LastEditors: curechen 981470148@qq.com
 * @LastEditTime: 2023-05-25 15:21:23
 * @FilePath: \workplace\React\web-dev-projects\personal-portfolio\src\components\Video.js
 * @Description: 
 */
import { useState, useEffect } from "react";

import 'animate.css';

export const Video = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div id="mask" className={isActive ? "mask" : ""}>
      <div className="close" onclick="clickClose()">×</div>
      <video className="video" src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls="controls">
        您的浏览器不支持 video 标签。
      </video>
    </div>
  )
}
