import { makePoint, getX, getY } from 'hexlet-points'; // eslint-disable-line

export const getQuadrant = (point) => {
  if(getX(point) > 0 && getY(point) > 0){
    return 1;
  } else if(getX(point) < 0 && getY(point) > 0){
    return 2;
  } else if(getX(point) < 0 && getY(point) < 0){
    return 3;
  } else if(getX(point) > 0 && getY(point) < 0){
    return 4;
  };

  return null;
};

export const getSymmetricalPoint = (point) => {
  return makePoint(-getX(point), -getY(point));
};

export const calculateDistance = (point1, point2) => {
  return Math.sqrt(((getX(point2) - getX(point1)) ** 2) + ((getY(point2) - getY(point1)) ** 2));
};

