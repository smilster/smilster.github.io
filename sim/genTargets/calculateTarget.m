function [targetX targetY] = calculateTarget(fileName,N,L)
  fileName

  pic = imread(fileName);

  if size(pic,3)>1
    pic = rgb2gray(pic);
  endif

  pic = pic(:,:,1);





  picBW =  255 - pic;
  ##rgb2gray(pic)';
  ##imshow(picBW(:,:))


  Lx = size(picBW,2);
  Ly = size(picBW,1);





  targetX = [];
  targetY = [];
  currentTargetSize = length(targetX);
  while currentTargetSize < N

  x = randi(Lx,N,1);
  y = randi(Ly,N,1);

    ii = find((picBW(y + Ly*(x-1))-255 * rand(N,1)) > 0);

    targetX = [ targetX; x(ii)];
    targetY = [ targetY; y(ii)];

    currentTargetSize = length(targetX);
  end

  maxL = max(Lx,Ly);

  targetX = +(targetX(1:N) - Lx/2) / maxL * L;
  targetY = -(targetY(1:N) - Ly/2) / maxL * L;

  distanceToOrigin = (targetX-L).^2 +  0*(targetY).^2;


  [a b] = sort(distanceToOrigin);
  targetX = targetX(b);
  targetY = targetY(b);





end






