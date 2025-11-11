
clear all
clc
####
######
compiler = "lualatex";
%genPicsFromWords(compiler)

N=8000;%4500;
L=1000;

x  = L * (rand(N,1)-0.5);
vx =  100*randn(N,1);;

y = L * (rand(N,1) -0.5) ;
vy = 100*zeros(N,1);
noise = 8;
dt=0.02;

targetX = [];
targetY = [];
picList = glob("pics/*.jpg");
for i=1:length(picList)
  [currentTargetX currentTargetY] = calculateTarget(picList{i},N,L);
  targetX = [targetX currentTargetX];
  targetY = [targetY currentTargetY];
endfor

targetX=0.25*targetX;
targetY=0.25*targetY;


targetNumber = size(targetX,2);

out = "let targetX = [];\nlet targetY = [];\n\n";


for i = 1:targetNumber
  out = [out "targetX.push([" regexprep(num2str(targetX(:,i)'),'\s+',',') "])\n"];
end

for i = 1:targetNumber
  out = [out "targetY.push([" regexprep(num2str(targetY(:,i)'),'\s+',',') "])\n"];
end

out = [out "\n\n const targetNumber = " num2str(targetNumber)  "\n\n\n"];

filename = "../targets.js";

fid = fopen (filename, "w");
fputs (fid, out);
fclose (fid);




##
##
##  targetIndex=randi(size(targetX,2));
##
##
##  vx =  100*randn(N,1);
##  vy =  100*randn(N,1);;
##
##  for j = 1:200
##
##
##    x = x + vx*dt;
##    y = y + vy*dt;
##
##    vx = vx  - 5 * vx * dt + 10 * (targetX(:,targetIndex) -x) * dt + noise*randn(N,1)*sqrt(dt);
##    vy = vy  - 5 * vy * dt + 10 * (targetY(:,targetIndex) -y) * dt + noise*randn(N,1)*sqrt(dt);
##
##    diffusion=2;
##    scatter(x,y,25,"fill")
####    axis(0.5 * L * [-1 1 -1 1])
##    axis equal
##    pause(0.01)
##  endfor




