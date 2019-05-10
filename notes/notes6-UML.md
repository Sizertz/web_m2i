# UML

> = Unified Modelling Language
* deved for OOP
* fusion of 3 methods made by founders of RationalTools

> faire une abstraction = omettre des informations non-essentielles pour la compréhension d'un problème à un moment donné

> POO =
> 1. encapsulation
> 2. héritage
> 3. polymorphisme =(def) chgt de comportement en fonction du contexte
> 4. abstraction

* polymorphisme statique = surcharge
* polymorphisme dynamique = late-binding / re-définition
___
* UML is just a tool
* used in many software design strategies
* on veut modéliser pour mieux comprendre le problème et trouver efficacement une solution

Buts d'UML:
* visualiser > le modèle permet de visualiser le système tel qu'il est ou tel qu'on voudrait qu'il soit 
* spécifier > le modèle précise la structure et le comportement du système 
* construire > le modèle fournit un canevas qui guide la construction du problème
* documenter > le modèle UML documente les décisions prises de manière précise, concise

___
4 principes de modélisation
1. le choix des modèles à créer influence la manière de traiter un problème et sur la nature de la solution.
2. tous les modèles peuvent avoir différents niveaux de précision.
    * typiquement on enrichit les modèles peu à peu.
3. les meilleurs modèles ne perdent pas le sens de la réalité.
4. il vaut mieux décomposer un modèle complexe en petits sous-modèles.

___
* langage = alphabet + vocabulaire + grammaire
> UML est un langage essentiellement graphique concu pour (mais _pas_ limité à) la conception de logiciels


* Ingénierie vers l'aval : on peut générer du code à partir d'un diagramme UML
* Rétro-ingénierie = construire un modèle UML à partir d'un software. Nécessite un contrôle humain car run même code peut être généré par plusieurs modèles
* Round-trip-engineering combinaison des deux


___
management classique : 
1. cahier des charges fonctionnel
2. cahier des charges technique
3. implémentation en un temps et un budget donné

management agile : 
* on modifie les objectifs au fur et à mesure 
* on produit rapidement des productions incrémentalement
* on rémunère sur le travail concret fourni
* les membres de l'équipe sont à égalité et polyvalents

Xtreme Programming:
* travail en binôme

___
UML =  elts, relations, diagrammes
___
## Elts structurels
Classe (un ensemble d'éléments ayant les mêmes:)
* attributs
* opérations (méthodes)
* relations
* sémantiques
* réalise(implémente) des interfaces

Interface (définit une fonction ou un comportement)
* opérations

Collaboration (définit une fonction ou un comportement donné quand plusieurs éléments travaillent ensemble)
* en général utilisé pour modéliser un cas d'utilisation

Cas d'utilisation
* séquence d'actions par le système pour obtenir un résultat
* réalisé par une collaboration

Classe active
* classe qui possède des threads ou des processus qui tournent en concurrence
* thread/tâche = unité d'exécution
* processus = l'image en mémoire d'une application (l'espace mémoire, sa pile, son tas, etc) qui possède plusieurs threads

Composant
* partie remplaçable d'un système qui se conforme à une interface
* souvent est le regroupement de plusieurs éléments qui réalisent cette interface

Un noeud
* une unité de calcul


___
Couplage faible:
* quand la modification d'un élément ne nécessite pas de ré-écrire un autre
___
## Elts comportementaux
* les verbes

interaction
* entre plusieurs éléments
* des messages
* des actions utilisant les messages

automates à états finis
* graphe spécifiant l'état d'un système au cours du temps
* états
* déclencheurs
* transitions

paquetage
* regroupement d'éléments UML
* purement conceptuel => plus similaire au <code>namespace</code> de C# qu'au <code>package</code> Java

___
## Les relations

1. La dépendance
    * sémantique
    * flèche pointillée
    * changement dans l'une affecte la sémantique de l'autre

2. L'association
    * structurel
    * ligne pleine
    * l'un _possède_ l'autre
    * cas particulier : composition
        * un tout et ses parties
        1. composition forte
        2. composition faible (= aggrégation)

3. généralisation/spécialisation
    * héritage

4. réalisation
    1. entre 1 interface et classes ou composants qui la réalisent
    2. entre cas d'utilisation et collaboration

___
## Les diagrammes

diag de classe 
diag de d'objets = au niveau des instances
diag de cas d'utilisation
diag de séquence = life lines
diag de collaboration
diag d'états-transitions
diag d'activités ~= organigramme
diag de composants
diag de déploiement

___
acteur =(def) tout ce qui peut intéragir avec le système
* les utilisateurs (end users, admin, maintenance, etc)
* autres systèmes

___
cas d'utilisation
* résultat observable par un acteur
* ne spécifie pas la réalisation concrète du résultat
* verbe à l'infinitif
* début et fin clairs
* alternatives et variantes
* cas nominal = cas typique
* cas alternatif = se passe bien
* cas d'erreur = échec

En utilisant des scénarios texte
* scénarios = exemple d'enchaînements 
* généralement décrit avec du texte
* être le plus nominal et spécifique et concret possible.
ex: Prost Alain, RH de Peugeot, appelle France Simioni, responsable formation de M2I pour lancer une POE Java
* pré-conditions et post-conditions

En utilisant des fiches plus ou moins standardisées
* sommaire d'ID: titre, résumé, date de création, version, responsable, acteurs,...
* description textuelle de scénarios:
    1. scénario nominal
    2. alternatifs et erreurs
* exigences non-fonctionelles : ex: fréquence, volumétrie, disponibilité, fiabilité, confidentialité

En utilisant un diagramme de séquence
* difficile

___
* acteurs principaux : bénéficient du système
* acteurs secondaires : sont typiquement uniquement sollicités dans certains use cases

___
organigramme/ordinogramme = représentation graphique d'un algorithme

___
## Homework

draw.io

visual paradigm

pour lundi : qu'est-ce que fork et join dans un diagramme d'activité ?

servlet, JPA, hibernate, javaFX, node, xpress, angular, JSF