/*
  "ANTHROPOCENTRISM": 0,
  "ASSIMILATIONISM": 1,
  "AUTHORITARIANISM": 2,
  "AUTOCRACY": 3,
  "CAPITALISM": 4,
  "COMMUNISM": 5,
  "CONSERVATISM": 6,
  "DEMOCRACY": 7,
  "ECOCENTRISM": 8,
  "ELITISM": 9,
  "GLOBALISM": 10,
  "INTERNATIONALISM": 11,
  "ISOLATIONISM": 12,
  "LIBERTARIANISM": 13,
  "MERITOCRACY": 14,
  "MILITARISM": 15,
  "MODERNISM": 16,
  "NATIONALISM": 17,
  "PACIFISM": 18,
  "PARTISANSHIP": 19,
  "PLURALISM": 20,
  "POPULISM": 21,
  "SECULARISM": 22,
  "THEOCRACY": 23
*/

var questions = [
  // Anthropocentrism
  {
    "text": "Exploitation of the environment for human benefit is legitimate.",
    "dimension": 0,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Humans, through their superiority, are the rightful owners of nature.",
    "dimension": 0,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Sacrificing ecosystems for human use is acceptable.",
    "dimension": 0,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Advancement of civilization cannot be abandoned for the sake of inconsequential effects on nature.",
    "dimension": 0,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Without sentience to observe it, nature has no value.",
    "dimension": 0,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },

  // Assimilationism
  {
    "text": "Unintegrated multiculturalism is a threat to any given society.",
    "dimension": 1,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Immigrants must integrate into the societies in which they live.",
    "dimension": 1,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Multicultural societies are bound to suffer ethnic, social, and cultural friction.",
    "dimension": 1,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Diverse societies tend to fraction into unitary parts.",
    "dimension": 1,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "In the modern world, where nation states have replaced empires, multiculturalism is inapplicable.",
    "dimension": 1,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },

  // Authoritarianism
  {
    "text": "Law enforcement should have access to firearms.",
    "dimension": 2,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "The sacrifice of some civil liberties is necessary for establishing an ordered and cooperative society.",
    "dimension": 2,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "The purpose of penal systems is to isolate disruptive individuals from the rest of society.",
    "dimension": 2,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "The right to swing one’s fist ends where the other man’s nose begins.",
    "dimension": 2,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Human nature is too destructive to be left unsupervised.",
    "dimension": 2,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },

  // Autocracy
  {
    "text": "Masses are too ignorant to be trusted with state authority.",
    "dimension": 3,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Given the many historical examples of democracies degrading into tyrannies, participatory democracy is a foolish attempt.",
    "dimension": 3,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Some differences in governance approach simply cannot be reconciled by the general population.",
    "dimension": 3,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Individuals may be intelligent but masses are always incompetent.",
    "dimension": 3,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Democracy is a highly corruptible system with self-destructive tendencies.",
    "dimension": 3,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },

  // Capitalism
  {
    "text": "Human nature’s tendency to selfishness is a reliable basis for economic models.",
    "dimension": 4,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Market economy is optimal when unregulated.",
    "dimension": 4,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Consumer demand is the only reliable force for regulating the market.",
    "dimension": 4,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Within legal boundaries, no harm comes from corporate endeavors.",
    "dimension": 4,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Wealth is rightfully earned, regardless of proportion.",
    "dimension": 4,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },

  // Communism
  {
    "text": "Revenues and capital should be taxed proportionally to ensure fair distribution of wealth.",
    "dimension": 5,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Minimum salary must be enough to sustain entertainment expenses, in addition to basic need spendings.",
    "dimension": 5,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Government intervention is necessary for a stable economy.",
    "dimension": 5,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Corporations exploit their employees to an extreme degree.",
    "dimension": 5,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Those who are accomplished must compensate for the shortcomings of others.",
    "dimension": 5,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },

  // Conservatism
  {
    "text": "Curricula should include national values and traditions.",
    "dimension": 6,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "National values must be protected and transferred across generations.",
    "dimension": 6,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Traditions and old methods hold knowledge to be revered.",
    "dimension": 6,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "States cannot risk walking unknown paths and should stick to what is conventional.",
    "dimension": 6,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Modernity is imposed degeneration in disguise.",
    "dimension": 6,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },

  // Democracy
  {
    "text": "In elections and referendums extreme ideas cancel one another, leaving only the most reasonable option.",
    "dimension": 7,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Only the people themselves can truly represent and voice their needs and requests.",
    "dimension": 7,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Democracy is an irreplaceable component of civilization.",
    "dimension": 7,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "The collective will is always wiser than individual concerns.",
    "dimension": 7,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Every citizen has equal rights over the state, thus deserves equal representation.",
    "dimension": 7,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },

  // Ecocentrism
  {
    "text": "Extinction of species due to human actions is unacceptable.",
    "dimension": 8,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Nature has intrinsic rights to protection, regardless of human law.",
    "dimension": 8,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "For the simple fact that nature is a requirement for human survival, its protection is imperative.",
    "dimension": 8,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Human exploitation of natural resources is unjustifiably excessive.",
    "dimension": 8,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Abusing nature will have tremendous consequences for humankind.",
    "dimension": 8,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },

  // Elitism
  {
    "text": "Intellectualism is only found in select groups.",
    "dimension": 9,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "The appeasement of certain circles is more important than satisfying the public for a statesman.",
    "dimension": 9,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Those who have higher influence on state affairs than the average voter, deserve their position.",
    "dimension": 9,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "The educated few are much more difficult to manipulate than the ignorant majority, thus preventing government corruption.",
    "dimension": 9,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Vote equality wrongfully elevates the uneducated majority to the same value as the competent elite.",
    "dimension": 9,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },

  // Globalism
  {
    "text": "Self-contained countries with no international interactions cannot prosper.",
    "dimension": 10,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Individuals should be equally concerned about foreigners as if they are compatriots.",
    "dimension": 10,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Humanity is too intertwined for ignoring foreign issues.",
    "dimension": 10,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Highly interdependent economies can be sustainable.",
    "dimension": 10,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Interactions through art, sports, science, and technology are beneficial to every involved party.",
    "dimension": 10,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },

  // Internationalism
  {
    "text": "Ideals are significantly more valuable than one’s country.",
    "dimension": 11,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Every country must pay reparations for the crimes they have committed.",
    "dimension": 11,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Foreigners should be given the exact same rights and freedoms in politics as citizens.",
    "dimension": 11,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Humanity’s achievements cannot be credited to single nations.",
    "dimension": 11,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Borders are arbitrary, and should eventually be abolished.",
    "dimension": 11,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },

  // Isolationism
  {
    "text": "Research produced by a country should not be made available to other countries.",
    "dimension": 12,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Deep economic ties only make countries dependent on exterior factors.",
    "dimension": 12,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "True prosperity comes from complete self-sustainability.",
    "dimension": 12,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Countries’ internal affairs should be of no concern to other countries.",
    "dimension": 12,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "International organizations restrict the domestic liberties of their member states.",
    "dimension": 12,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },

  // Libertarianism
  {
    "text": "States should not have the right to collect their citizens’ personal information.",
    "dimension": 13,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Freedom is a fundamental human need.",
    "dimension": 13,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Rights should only be restricted when the individual allows.",
    "dimension": 13,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "The right to anonymity on the internet should be guaranteed.",
    "dimension": 13,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Freedom of expression and the right to protest are untouchable.",
    "dimension": 13,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },

  // Meritocracy
  {
    "text": "Only those who prove their capability should be given positions of power.",
    "dimension": 14,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "The perfect state is rendered ineffective if merit is not the basis of political appointments.",
    "dimension": 14,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Merit knows no ideology, therefore ensures impartial governance.",
    "dimension": 14,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "The capable assume responsibility to make a difference, the incapable do so for personal gain.",
    "dimension": 14,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Leaders afraid of the capabilities of their subordinates are not good leaders.",
    "dimension": 14,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },

  // Militarism
  {
    "text": "Armed struggle is necessary to ensure the security of a nation.",
    "dimension": 15,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Beyond-borders operations are crucial in counter-terrorism.",
    "dimension": 15,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Development of military technologies is the most notable source of technological advancement.",
    "dimension": 15,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Military coups are a legitimate method of terminating terms of detrimental governance.",
    "dimension": 15,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "The armed forces are a necessary institution to be revered, regardless of the presence of a physical threat.",
    "dimension": 15,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },

  // Modernism
  {
    "text": "Traditions should be periodically questioned and reformed.",
    "dimension": 16,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Humanity constantly evolves for the better, with the contemporary always exceeding the traditional.",
    "dimension": 16,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Societies that reject change are destined to fade away.",
    "dimension": 16,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Traditions are habits that are no longer useful in the modern world.",
    "dimension": 16,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Customs hinder a society’s ability to improve and advance.",
    "dimension": 16,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },

  // Nationalism
  {
    "text": "The main objective of states is to serve their citizens above foreigners.",
    "dimension": 17,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Commonality in language, culture, and history is the major factor in societal unification.",
    "dimension": 17,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Nationality is an integral part of an individual’s character.",
    "dimension": 17,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Historical tendencies of a people provide reliable information regarding their modern behavior.",
    "dimension": 17,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "A proper state is one fought for and established by a united people.",
    "dimension": 17,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },

  // Pacifism
  {
    "text": "The aftermath of military interventions are never truly justifiable.",
    "dimension": 18,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Demilitarization should be the common goal of every nation in the world.",
    "dimension": 18,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Peace through domination is not peace at all.",
    "dimension": 18,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Military only consumes government budget and offers nothing useful in return.",
    "dimension": 18,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "The only victors of war are the ones who do not fight it.",
    "dimension": 18,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },

  // Partisanship
  {
    "text": "Loyalty is an absolute priority in state business.",
    "dimension": 19,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Solutions must serve the goals of the ruling authority.",
    "dimension": 19,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "It is only natural for governments to reward their ideological followers.",
    "dimension": 19,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Loyalty to a common authority is more important in state affairs than merit.",
    "dimension": 19,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Neutrality in state decisions is impossible, everyone must subscribe to a camp.",
    "dimension": 19,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },

  // Pluralism
  {
    "text": "Addition or replacement of official languages is not a concern for societies.",
    "dimension": 20,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Foreign inclusion enriches national cultures.",
    "dimension": 20,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Asking individuals to forgo their cultural backgrounds is impractical.",
    "dimension": 20,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Diversity leads to a more capable and adaptable society.",
    "dimension": 20,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "All cultures are compatible.",
    "dimension": 20,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },

  // Populism
  {
    "text": "Pleasing the public is the main mission of the state.",
    "dimension": 21,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Manipulation of the majority is necessary for gaining government authority.",
    "dimension": 21,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Promises which will gain popular support are legitimate tools in politics, regardless of their fulfillment.",
    "dimension": 21,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Using public fears is a useful method for initiating political change.",
    "dimension": 21,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "The elite use the government authority for selfish gains, hence only the populace can truly run a state for its intended purpose.",
    "dimension": 21,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },

  // Secularism
  {
    "text": "Religion, by its very nature, is an undesirable competitor against the state.",
    "dimension": 22,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "The presence of religion in politics only facilitates popular manipulation and corruption.",
    "dimension": 22,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Those who had no chance of questioning their faith cannot be considered faithful.",
    "dimension": 22,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Religious commandments will become obsolete, if not outdated already.",
    "dimension": 22,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "The unchangeable nature of religious mandates rules them out as effective methods of governance.",
    "dimension": 22,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },

  // Theocracy
  {
    "text": "Out of all current religions, the one true religion is clearly known.",
    "dimension": 23,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Human minds cannot comprehend the reasons behind religious commandments, therefore they should not be questioned.",
    "dimension": 23,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "Religion is the greatest force of unification, much greater than ideology or nationality.",
    "dimension": 23,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "All humankind knows of morality stems from religion.",
    "dimension": 23,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  },
  {
    "text": "A conflict between faith and human comprehension of reality implies an error in human logic.",
    "dimension": 23,
    "aa": [7],
    "pa": [5, 0.5],
    "n": [0, 3],
    "pd": [2, 0.5],
    "ad": [0]
  }
]