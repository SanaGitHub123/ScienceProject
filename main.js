elements = [
  "", "Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", "Sodium", "Magnesium", "Aluminium", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc", "Gallium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium", "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin", "Antimony", "Tellurium", "Iodine", "Xenon", "Cesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", "Lutetium", "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury", "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon", "Francium", "Radium", "Actinium", "Thorium", "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium", "Darmstadtium", "Roentgenium", "Ununbiium", "Nihonium", "Ununquadium"
]

TextNumber = 0;
TextName = "";
Valency = "";
Val = ""

function add(){
  TextNumber = document.getElementById("AtNo").value;
  calculate(TextNumber);
  TextName = elements[TextNumber];
  document.getElementById("Hi").innerHTML = "Name: " + TextName;
  document.getElementById("Bye").innerHTML ="Valency Distribution: " + Valency;
  document.getElementById("Die").innerHTML ="Valency: " + Val;
  
}

function calculate(Num){
  K = 0;
  L = 0;
  M = 0;
  N = 0;
  O = 0;
  P = 0;
  Q = 0;
  R = 0;
  S = 0;
  T = 0;
  U = 0;
  V = 0;
  W = 0;
  X = 0;
  Y = 0;
  Z = 0;
  Last = 0;

  Counter = TextNumber;

  if (Counter <= 2){
    K = Counter;
    Valency = String(K);
    Last = K
  }

  else if (Counter <= 10){
    K = 2;
    L = Counter - 2;
    Valency = String(K) + ", " + String(L);
    Last = L
  }

  else if (Counter <= 18){
    K = 2;
    L = 8;
    M = Counter - 10;
    Valency = String(K) + ", " + String(L) + ", " + String(M);
    Last = M
  }

  else if (Counter <= 26){
    K = 2;
    L = 8;
    M = 8;
    N = Counter - 18;
    Valency = String(K) + ", " + String(L) + ", " + String(M) + ", " + String(N);
    Last = N
  }

  else if (Counter <= 34){
    K = 2;
    L = 8;
    M = 8;
    N = 8;
    O = Counter - 26;
    Valency = String(K) + ", " + String(L) + ", " + String(M) + ", " + String(N) + ", " + String(O);
    Last = O
  }

  else if (Counter <= 42){
    K = 2;
    L = 8;
    M = 8;
    N = 8;
    O = 8
    P = Counter - 34;
    Valency = String(K) + ", " + String(L) + ", " + String(M) + ", " + String(N) + ", " + String(O) + ", " + String(O);
    Last = P
  }

  else if (Counter <= 50){
    K = 2;
    L = 8;
    M = 8;
    N = 8;
    O = 8;
    P = 8;
    Q = Counter - 42;
    Valency = String(K) + ", " + String(L) + ", " + String(M) + ", " + String(N) + ", " + String(O) + ", " + String(P) + ", " + String(Q);
    Last = Q
  }

  else if (Counter <= 58){
    K = 2;
    L = 8;
    M = 8;
    N = 8;
    O = 8;
    P = 8;
    Q = 8;
    R = Counter - 50;
    Valency = String(K) + ", " + String(L) + ", " + String(M) + ", " + String(N) + ", " + String(O) + ", " + String(P) + ", " + String(Q) + ", " + String(R);
    Last = R
  }

  else if (Counter <= 66){
    K = 2;
    L = 8;
    M = 8;
    N = 8;
    O = 8;
    P = 8;
    Q = 8;
    R = 8;
    S = Counter - 58;
    Valency = String(K) + ", " + String(L) + ", " + String(M) + ", " + String(N) + ", " + String(O) + ", " + String(P) + ", " + String(Q) + ", " + String(R) + ", " + String(S);
    Last = S
  }

  else if (Counter <= 74){
    K = 2;
    L = 8;
    M = 8;
    N = 8;
    O = 8;
    P = 8;
    Q = 8;
    R = 8;
    S = 8;
    T = Counter - 66;
    Valency = String(K) + ", " + String(L) + ", " + String(M) + ", " + String(N) + ", " + String(O) + ", " + String(P) + ", " + String(Q) + ", " + String(R) + ", " + String(S) + ", " + String(T);
    Last = T
  }

  else if (Counter <= 82){
    K = 2;
    L = 8;
    M = 8;
    N = 8;
    O = 8;
    P = 8;
    Q = 8;
    R = 8;
    S = 8;
    T = 8;
    U = Counter - 74;
    Valency = String(K) + ", " + String(L) + ", " + String(M) + ", " + String(N) + ", " + String(O) + ", " + String(P) + ", " + String(Q) + ", " + String(R) + ", " + String(S) + ", " + String(T) + ", " + String(U);
    Last = U
  }

  else if (Counter <= 90){
    K = 2;
    L = 8;
    M = 8;
    N = 8;
    O = 8;
    P = 8;
    Q = 8;
    R = 8;
    S = 8;
    T = 8;
    U = 8;
    V = Counter - 82;
    Valency = String(K) + ", " + String(L) + ", " + String(M) + ", " + String(N) + ", " + String(O) + ", " + String(P) + ", " + String(Q) + ", " + String(R) + ", " + String(S) + ", " + String(T) + ", " + String(U) + ", " + String(V);
    Last = V
  }

  else if (Counter <= 98){
    K = 2;
    L = 8;
    M = 8;
    N = 8;
    O = 8;
    P = 8;
    Q = 8;
    R = 8;
    S = 8;
    T = 8;
    U = 8;
    V = 8;
    W = Counter - 90;
    Valency = String(K) + ", " + String(L) + ", " + String(M) + ", " + String(N) + ", " + String(O) + ", " + String(P) + ", " + String(Q) + ", " + String(R) + ", " + String(S) + ", " + String(T) + ", " + String(U) + ", " + String(V) + ", " + String(W);
    Last = W
  }
  
  else if (Counter <= 106){
    K = 2;
    L = 8;
    M = 8;
    N = 8;
    O = 8;
    P = 8;
    Q = 8;
    R = 8;
    S = 8;
    T = 8;
    U = 8;
    V = 8;
    W = 8;
    X = Counter - 98;
    Valency = String(K) + ", " + String(L) + ", " + String(M) + ", " + String(N) + ", " + String(O) + ", " + String(P) + ", " + String(Q) + ", " + String(R) + ", " + String(S) + ", " + String(T) + ", " + String(U) + ", " + String(V) + ", " + String(W) + ", " + String(X);
    Last = X
  }
  
  else if (Counter <= 114){
    K = 2;
    L = 8;
    M = 8;
    N = 8;
    O = 8;
    P = 8;
    Q = 8;
    R = 8;
    S = 8;
    T = 8;
    U = 8;
    V = 8;
    W = 8;
    X = 8;
    Y = Counter - 106;
    Valency = String(K) + ", " + String(L) + ", " + String(M) + ", " + String(N) + ", " + String(O) + ", " + String(P) + ", " + String(Q) + ", " + String(R) + ", " + String(S) + ", " + String(T) + ", " + String(U) + ", " + String(V) + ", " + String(W) + ", " + String(X) + ", " + String(Y);
    Last = Y
  }

  else if (Counter <= 118){
    K = 2;
    L = 8;
    M = 8;
    N = 8;
    O = 8;
    P = 8;
    Q = 8;
    R = 8;
    S = 8;
    T = 8;
    U = 8;
    V = 8;
    W = 8;
    X = 8;
    Y = 8;
    Z = Counter - 114;
    Valency = String(K) + ", " + String(L) + ", " + String(M) + ", " + String(N) + ", " + String(O) + ", " + String(P) + ", " + String(Q) + ", " + String(R) + ", " + String(S) + ", " + String(T) + ", " + String(U) + ", " + String(V) + ", " + String(W) + ", " + String(X) + ", " + String(Y) + ", " + String(Z);
    Last = Z
  }

  if (Last < 5){
    Val = String(Last);
  }

  else if (Last > 5){
    Val = String(8 - Last);
  }

  else{
    Val = String(Last) + ", " + String(8 - Last);
  }
}