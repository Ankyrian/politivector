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
        "text": "İnsan yararı uğruna doğanın sömürülmesi meşrudur.",
        "dimension": 0,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "İnsanlık, doğaya karşı üstünlüğünden dolayı, tabiatın meşru sahibidir.",
        "dimension": 0,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "İnsan kullanımı adına ekosistemleri feda etmek kabul edilebilirdir.",
        "dimension": 0,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Medeniyetin ilerleyişi, doğa üzerindeki küçük etkileri yüzünden terk edilemez.",
        "dimension": 0,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Doğanın, onu gözlemleyecek bir bilinç olmadıkça bir değeri yoktur.",
        "dimension": 0,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },

    // Assimilationism
    {
        "text": "Entegre edilmemiş çok kültürlülük, her toplum için bir tehdittir.",
        "dimension": 1,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Göçmenler, içlerine yerleştikleri toplumlara entegre olmalıdırlar.",
        "dimension": 1,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Çok kültürlü toplumlar etnik, sosyal ve kültürel gerilim yaşamaya mahkumdurlar.",
        "dimension": 1,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Kültür veya fikir bakımından homojen olmayan toplumlar, bölünmeye eğilimlidirler.",
        "dimension": 1,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Ulus devletlerin imparatorlukların yerini aldığı modern dünyada, çok kültürlülük uygulanabilir değildir.",
        "dimension": 1,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },

    // Authoritarianism
    {
        "text": "Kolluk kuvvetlerinin ateşli silahlara erişimi olmalıdır.",
        "dimension": 2,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Düzenli ve uyumlu toplumların oluşması için bazı hakların feda edilmesi gereklidir.",
        "dimension": 2,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Cezai sistemlerin amacı, topluma zararlı bireylerin toplumdan uzaklaştırılmasıdır.",
        "dimension": 2,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Bir bireyin özgürlükleri, bir başka bireyin özgürlüklerinin başladığı yerde biter.",
        "dimension": 2,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "İnsan doğası, kendi haline bırakılmak için fazla yıkıcıdır.",
        "dimension": 2,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },

    // Autocracy
    {
        "text": "Kitleler, devlet otoritesi devredilmek için fazla cahildir.",
        "dimension": 3,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Çaresiz zamanlarda geçici diktatörlük, demokrasiler için güvenli bir seçenektir.",
        "dimension": 3,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Yönetim yaklaşımları hakkındaki bazı anlaşmazlıklar, genel halk tarafından giderilemez.",
        "dimension": 3,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Şahıslar zeki olabilir ancak toplum her zaman niteliksizdir.",
        "dimension": 3,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Demokrasi, kendini yok etme eğilimleri olan ve yozlaşmaya oldukça müsait bir sistemdir.",
        "dimension": 3,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },

    // Capitalism
    {
        "text": "İnsanın bencilliğe olan eğilimi, ekonomik model kurmak adına iyi bir temeldir.",
        "dimension": 4,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Piyasa ekonomisi, denetlenmediği zaman en verimli halindedir.",
        "dimension": 4,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Arz ve talep, piyasayı düzenlemek için tek güvenilir kuvvettir.",
        "dimension": 4,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Şirketlerin yasa çerçevesindeki hareketlerinden zarar doğmaz.",
        "dimension": 4,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Miktarı fark etmeksizin her servet, haklı kazanılmıştır.",
        "dimension": 4,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },

    // Communism
    {
        "text": "Gelir ve birikimler, servet dağılımını sağlamak adına orantılı olarak vergilendirilmelidir.",
        "dimension": 5,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Asgari ücret yalnızca temel ihtiyaçları değil, eğlence giderlerini de karşılayacak düzeyde olmalıdır.",
        "dimension": 5,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "İstikrarlı bir ekonomi için şirketlere devlet müdahalesi şarttır.",
        "dimension": 5,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Şirketler, elemanlarını aşırı düzeyde sömürmektedir.",
        "dimension": 5,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Başarıya ermiş olanlar, diğerlerinin eksiklerini gidermelidir.",
        "dimension": 5,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },

    // Conservatism
    {
        "text": "Eğitim müfredatları, milli değer ve gelenekleri içermelidir.",
        "dimension": 6,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Milli değerler nesilden nesile korunmalı ve aktarılmalıdır.",
        "dimension": 6,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Gelenekler ve eski yöntemler saygıyı hak eden bilgiler içerirler.",
        "dimension": 6,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Devletler, yürünmemiş yolları deneme riskini göze alamaz ve geleneksel olana sadık kalmalıdırlar.",
        "dimension": 6,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Çağdaşlık, gizlice dayatılan yozlaşmadır.",
        "dimension": 6,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },

    // Democracy
    {
        "text": "Seçim ve referandumlarda aşırı uç fikirler birbirlerini eler ve sadece en makul seçenek ortada kalır.",
        "dimension": 7,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    { 
        "text": "Halkı gerçekten temsil edip, ihtiyaçlarını ve isteklerini dillendirebilecek tek merci halkın kendisidir",
        "dimension": 7,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Demokrasi, medeniyetin vazgeçilmez bir parçasıdır.",
        "dimension": 7,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Toplum iradesi, bireysel zihinlerden her zaman daha bilgedir.",
        "dimension": 7,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Her vatandaş devlet üzerindeki hakkı eşit olduğundan eşit temsil hak eder.",
        "dimension": 7,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },

    // Ecocentrism
    {
        "text": "İnsan aktivitelerinden dolayı canlı türlerinin yok olması kabul edilemezdir.",
        "dimension": 8,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "İnsanlığın yasaları olsun veya olmasın, tabiatın temel korunma hakları vardır.",
        "dimension": 8,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Doğanın insan yaşamı için hayati oluşu, onun korunması için yeterli bir sebeptir.",
        "dimension": 8,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Doğal kaynakların insanlarca sömürülmesi kabul edilemez seviyededir.",
        "dimension": 8,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Doğanın suistimali insanlık için korkunç sonuçlar doğuracaktır.",
        "dimension": 8,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },

    // Elitism
    {
        "text": "Entelektüellik, yalnızca belli kesimlerde bulunur.",
        "dimension": 9,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Bir siyasetçi için, belli kitlelerin memnuniyeti, halkın memnuniyetinden daha önemlidir.",
        "dimension": 9,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Devlet işlerinde sıradan vatandaştan daha fazla söz sahibi kazanmış olanlar, bu statülerini hak etmişlerdir.",
        "dimension": 9,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Eğitimli azınlık, cahil çoğunluktan daha zor manipüle edileceği için devlet yozlaşmasını önler.",
        "dimension": 9,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Oy eşitliği, eğitimsiz çoğunluğa yetkin elitle haksızca aynı değeri biçer.",
        "dimension": 9,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },

    // Globalism
    {
        "text": "Uluslararası etkileşimleri olmayan içe kapanık ülkeler refaha kavuşamazlar.",
        "dimension": 10,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Bireyler, yabancılar adına yurttaşlarıyla eşit miktarda endişelenmelidirler.",
        "dimension": 10,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "İnsanlık, yabancıların sorunlarını göz ardı etmek için fazla iç içedir.",
        "dimension": 10,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Birbirine bağımlı ekonomilerin avantajları, dezavantajlarından fazladır.",
        "dimension": 10,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Sanat, spor, bilim ve teknoloji üzerinden yapılan etkileşimler, her katılımcı için yararlıdır.",
        "dimension": 10,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },

    // Internationalism
    {
        "text": "Bireyler için idealler, vatandaşı oldukları ülkelerden çok daha değerlidir.",
        "dimension": 11,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Her ülke, işlediği suçların karşılığını ödemelidir.",
        "dimension": 11,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Yabancılar, siyasette vatandaşlarla birebir aynı hak ve özgürlüklere sahip olmalıdırlar.",
        "dimension": 11,
        "aa": [9],
        "pa": [6, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "İnsanlığın başarıları tekil milletlere atfedilemez.",
        "dimension": 11,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Sınırlar anlamsızdır ve eninde sonunda kaldırılmalıdırlar.",
        "dimension": 11,
        "aa": [9],
        "pa": [6, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },

    // Isolationism
    {
        "text": "Ülkelerce yapılan araştırmalar, diğer ülkelerle paylaşılmamalıdır.",
        "dimension": 12,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Derin ekonomik ilişkiler, ülkeleri yalnızca dış etkenlere bağımlı hale getirir.",
        "dimension": 12,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Hakiki refah, tamamen kendine yetebilmekten gelir.",
        "dimension": 12,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Ülkelerin içişleri, diğer ülkeleri ilgilendirmemelidir.",
        "dimension": 12,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Uluslararası örgütler, üye ülkelerin iç özgürlüklerini kabul edilemez ölçüde kısıtlarlar.",
        "dimension": 12,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },

    // Libertarianism
    {
        "text": "Devletlerin, vatandaşlarının kişisel bilgilerini toplama hakkı yoktur.",
        "dimension": 13,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Özgürlük, temel bir insani ihtiyaçtır.",
        "dimension": 13,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Haklar, yalnızca bireyler izin verdikçe kısıtlanabilmelidir.",
        "dimension": 13,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "İnternette anonim kalma hakkı garanti altına alınmalıdır.",
        "dimension": 13,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "İfade özgürlüğü ve protesto hakkına dokunulamaz.",
        "dimension": 13,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },

    // Meritocracy
    {
        "text": "Güç mevkilerine, sadece yetkinliklerini kanıtlamış olanlar getirilmelidir.",
        "dimension": 14,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Siyasi atamaların temeli liyakat olmadıkça kusursuz bir devlet bile etkisiz hale gelir.",
        "dimension": 14,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Liyakat ideoloji tanımaz, böylece tarafsız yönetim sağlar.",
        "dimension": 14,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Yetkinler fark yaratmak için, niteliksizler ise şahsi kazanç için sorumluluk üstlenirler.",
        "dimension": 14,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Astlarının kabiliyetlerinden korkan liderler, iyi liderler değildirler.",
        "dimension": 14,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },

    // Militarism
    {
        "text": "Silahlı mücadele, ülkenin güvenliğini sağlamak için mecburidir.",
        "dimension": 15,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Sınır ötesi operasyonlar, terörle mücadelede hayati önem taşır.",
        "dimension": 15,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Teknolojik ilerlemenin ana kaynağı askeri teknolojilerdir.",
        "dimension": 15,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Askeri müdahale, zararlı yönetimlerin durdurulması için meşru bir yöntemdir.",
        "dimension": 15,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Fiziki bir tehdit olsun ya da olmasın, silahlı kuvvetler saygıyı hak eden bir kurumdur.",
        "dimension": 15,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },

    // Modernism
    {
        "text": "Gelenekler, düzenli olarak sorgulanmalı ve yenilenmelidir.",
        "dimension": 16,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "İnsanlık her zaman daha iyiye doğru evrilir.",
        "dimension": 16,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Değişimi reddeden toplumlar, yok olmaya mahkumdur.",
        "dimension": 16,
        "aa": [8],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Gelenekler, modern dünyada kullanışlı olmayan alışkanlıklardır.",
        "dimension": 16,
        "aa": [9],
        "pa": [6, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Gelenekler, toplumların gelişme ve ilerleme kabiliyetlerini kısıtlarlar.",
        "dimension": 16,
        "aa": [8],
        "pa": [5.5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },

    // Nationalism
    {
        "text": "Devletlerin asıl amacı, yabancılardan önce vatandaşlarına hizmet etmektir.",
        "dimension": 17,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Dil, kültür ve tarih ortaklığı, en büyük toplumsal birleştiricidir.",
        "dimension": 17,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Milliyet, bir bireyin karakterinin ayrılamaz bir parçasıdır.",
        "dimension": 17,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Ulusların tarihi eğilimleri, güncel davranışları için güvenilir öngörüler sağlar.",
        "dimension": 17,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Ancak birleşmiş bir halkın uğruna savaştığı ve kurduğu bir devlet hakiki bir devlettir.",
        "dimension": 17,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },

    // Pacifism
    {
        "text": "Askeri müdahalelerin neticeleri katiyen meşrulaştırılamaz.",
        "dimension": 18,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Silahsızlanma, dünyadaki her ülkenin ortak hedefi olmalıdır.",
        "dimension": 18,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Zoraki hakimiyetten doğan barış, hakiki barış değildir.",
        "dimension": 18,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Ordu, işe yarar hiçbir dönüşü olmadan yalnızca devlet bütçesini tüketir.",
        "dimension": 18,
        "aa": [9],
        "pa": [6, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Savaşın tek galipleri savaşmayanlardır.",
        "dimension": 18,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },

    // Partisanship
    {
        "text": "Sadakat, devlet işlerinde mutlak önceliktir.",
        "dimension": 19,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Siyasi çözümler, mevcut iktidarların hedeflerine hizmet etmelidir.",
        "dimension": 19,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "İktidarların, takipçilerini ödüllendirmeleri oldukça doğaldır.",
        "dimension": 19,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Ortak bir otoriteye olan bağlılık, devlet işlerinde liyakattan daha değerlidir.",
        "dimension": 19,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Devlet işlerinde tarafsızlık imkansızdır, herkes bir taraf tutmak zorundadır.",
        "dimension": 19,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },

    // Pluralism
    {
        "text": "Resmi dillerin eklenmesi veya değiştirilmesi, toplumlar için tehlike arz etmez.",
        "dimension": 20,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Yabancıların topluma katılımı, ulusal kültürleri zenginleştirir.",
        "dimension": 20,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Bireylerden kültürel geçmişlerini unutmalarını istemek mantıklı değildir.",
        "dimension": 20,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Toplumsal çeşitlilik, daha yetkin ve esnek toplumlar yaratır.",
        "dimension": 20,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Tüm kültürler birbirleriyle uyumludur.",
        "dimension": 20,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },

    // Populism
    {
        "text": "Halkı memnun etmek, devletin asli görevidir.",
        "dimension": 21,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Çoğunluğu manipüle etmek, iktidar olabilmek için bir zorunluluktur.",
        "dimension": 21,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Halk desteği kazandıracak vaatler, yerine getirilmeseler de, siyasette meşru araçlardır.",
        "dimension": 21,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Toplumsal korkuları kullanmak, siyasi değişim yaratmak için işe yarar bir yöntemdir.",
        "dimension": 21,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Elitler, devlet otoritesini şahsi kazançları için kullanırlar, yalnızca halk devleti gerçek amacı doğrultusunda idare edebilir.",
        "dimension": 21,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },

    // Secularism
    {
        "text": "Din, doğası gereği, devlete karşı istenmeyen bir rakiptir.",
        "dimension": 22,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Siyasette dinin varlığı yalnızca halkın manipülasyonunu ve yozlaşmasını kolaylaştırır.",
        "dimension": 22,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "İnançlarını sorgulama şansını hiç bulamamış olanlar, gerçekten inançlı değildirler.",
        "dimension": 22,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Dini emirler, halihazırda değillerse bile, nihayetinde eskiyecektirler.",
        "dimension": 22,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Dini kuralların değiştirelemez yapısı, onları etkin devlet idaresi yöntemleri olmaktan alıkoyar.",
        "dimension": 22,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },

    // Theocracy
    {
        "text": "Mevcut tüm dinler arasında tek gerçek din açıkça bilinmektedir.",
        "dimension": 23,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "İnsan zihinleri, dini emirlerin ardındaki sebepleri anlamaktan acizdirler, bu yüzden dini emirler sorgulanmamalıdırlar.",
        "dimension": 23,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Din en kuvvetli birleştirici unsurdur, ideoloji ve milliyetle kıyaslanamayacak kadar.",
        "dimension": 23,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "İnsanlığın ahlak olarak bildiği her şeyin kökeni dindir.",
        "dimension": 23,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    },
    {
        "text": "Dini yalanlayan tek bir doğru kanıt yoktur, yalnızca insanların yanlış anlaması vardır.",
        "dimension": 23,
        "aa": [7],
        "pa": [5, 0.5],
        "n": [0, 3],
        "pd": [2, 0.5],
        "ad": [0]
    }
]