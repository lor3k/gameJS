const tree = document.querySelector('.tree');
const owl = document.querySelector('.owl');

/**
 * Zarówno sowa jak i drzewo mają w CSS pozycję absolute, także sprawdźmy ich pozycję względem elementu w którym się znajdują,
 * stosując właściwość offsetTop i offsetLeft:
 *
 *     pozycjaDrzewaX będzie wynosiła drzewo.offsetLeft - jest to odległość od lewej krawędzi kontenerka
 *     pozycjaDrzewaY będzie wynosiła drzewo.offsetTop - jest to odległość od górnej krawędzi kontenerka
 *
 * Drzewo nie zmienia pozycji przez cały czas działania aplikacji, więc te zmienne nie będą się zmieniać.
 * 
 * Natomiast pozycja sowy będzie się zmieniać po każdym kliknięciu przycisku strzałki.
 * W związku z tym załóżmy nasłuch na sowę i sprawdzajmy na każdym wciśnięciu klawisza klawiatury, czy jest to klawisz strzałki. 
 * Jeżeli tak, to obliczamy gdzie jest nasza sowa w tym momencie. Następnie przesuwamy sowę na kolejną pozycję. 
 * Ale po kolei:
 *
 *     całemu dokumentowi nadajemy nasłuch na wydarzenie typu 'keydown' i niech to wydarzenie obsługuje funkcja o nazwie keydownHandler
 *
 *     następnie musimy zadeklarować funkcję keydownHandler. Funkcja ta przyjmuje jeden argument (event) i robi następujące rzeczy:
 *     - sprawdza, czy wciśniety przycisk to strzałka do góry czyli czy event.key jest równe "ArrowUp"
 *     - analogicznie sprawdza, czy wciśniety przycisk to strzałka w dół, w lewo, w prawo...
 *     - jeżeli wciśnięty przycisk to strzałka, to przypisujemy do zmiennej aktualnaPozycjaSowyX aktualną pozycję sowy X i analogicznie pozycję Y
 *     - jeżeli wciśnięty przycisk to strzałka w górę to dodajemy sowie do jej stylu top wartość 40px (zakładamy krok sowy o 40px)
 *       (a właściwie odejmujemy, bo top liczy się od góry w dół)
 *
 *       sowa.position.top = aktualnaPozycjaSowyX + 40 + 'px';
 *
 *     - pamiętamy jednak, że powyższe dodanie wartości jest możliwe tylko jeżeli sowa jest wciąż wewnątrz ramki,
 *       czyli gdy jej pozycjaY nie jest mniejsza od 0
 *     - analogicznie postępujemy z innymi kierunkami, pamiętając o ograniczeniach
 *     - na sam koniec funkcji sprawdzamy, czy pozycja sowy po przesunięciu jest równa pozycji drzewa,
 *       czyli znów obliczamy pozycję sowy i porównujemy do  drzewa
 *     - jeżeli obie pozycje (X i Y) sowy i drzewa są sobie równe, to kończymy grę zgodnie z instrukcją ;)
 */
