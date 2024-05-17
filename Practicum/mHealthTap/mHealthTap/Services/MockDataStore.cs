using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

using mHealthTap.Models;

using Newtonsoft.Json.Linq;

namespace mHealthTap.Services
{
    public class MockDataStore : IDataStore<Item>
    {
        readonly List<Item> items;
        readonly List<Item> itemCategories;

        public MockDataStore()
        {

            //ParseDataObject1();
            ParseDataObject2();

            items = new List<Item>()
            {
                new Item { Id = Guid.NewGuid().ToString(), Text = "Acute ischemic left middle cerebral artery stroke",
                    Description="ICD10: 123.4, Last Updated: 2021-03-19 14:09\n\n" +
                        "no tPA or thrombectomy due to being outside time window\n\n" +
                        "History:\nTobacco use,  hypertension, hyperlipidemia\n\n" +
                        "Vital Signs:\nBP 160/91-142/73; HR 62-99; O2 97-99%\n\n" +
                        "NIHSS:\n12 today 14 yesterday\n\n" +
                        "Stroke labs:\nHgBA1C: 6.8.% \nTSH: 1.2\nTotal Cholesterol 221\nLDL: 123\nRPR: negative" },
                new Item { Id = Guid.NewGuid().ToString(), Text = "Asthma", Description="ICD10: 234.5, Last Updated: 2021-03-19 10:20" },
                new Item { Id = Guid.NewGuid().ToString(), Text = "Fractured right thumb", Description="ICD10: 345.6, Last Updated: 2021-02-26 10:11" }
            };
            itemCategories = new List<Item>()
            {
                new Item { Id = Guid.NewGuid().ToString(), Text = "Active cards",
                    Description="3 cards" },
                new Item { Id = Guid.NewGuid().ToString(), Text = "Inctive cards",
                    Description="2 cards" }

            };
        }

        public async Task<bool> AddItemAsync(Item item)
        {
            items.Add(item);

            return await Task.FromResult(true);
        }

        public async Task<bool> UpdateItemAsync(Item item)
        {
            var oldItem = items.Where((Item arg) => arg.Id == item.Id).FirstOrDefault();
            items.Remove(oldItem);
            items.Add(item);

            return await Task.FromResult(true);
        }

        public async Task<bool> DeleteItemAsync(string id)
        {
            var oldItem = items.Where((Item arg) => arg.Id == id).FirstOrDefault();
            items.Remove(oldItem);

            return await Task.FromResult(true);
        }

        public async Task<Item> GetItemAsync(string id)
        {
            return await Task.FromResult(items.FirstOrDefault(s => s.Id == id));
        }

        public async Task<IEnumerable<Item>> GetItemsAsync(bool forceRefresh = false)
        {
            return await Task.FromResult(items);
        }

        public async Task<IEnumerable<Item>> GetItemCategoriesAsync(bool forceRefresh = false)
        {
            return await Task.FromResult(itemCategories);
        }

        private void ParseDataObject1()
        {
            string url = @"http://40.118.207.254:8080/Patient/1/$everything?_format=json";
            var webRequest = WebRequest.Create(url);
            string strContent;
            using (var response = webRequest.GetResponse())
            using (var content = response.GetResponseStream())
            using (var reader = new StreamReader(content))
            {
                strContent = reader.ReadToEnd();
            }
            Console.Write(strContent);
            JObject jObject = JObject.Parse(strContent);
            JArray jsonarray = (JArray)jObject["entry"];
            for (int i = 0; i < jsonarray.Count; i++)
            {
                try
                {
                    JObject aItem = (JObject)jsonarray[i];
                    string resourceType = (string)aItem["resource"]["resourceType"];
                    if (resourceType.Equals("Patient"))
                    {
                        JArray nameArray = (JArray)aItem["resource"]["name"];
                        string gender = (string)aItem["resource"]["gender"];
                        string birthDate = (string)aItem["resource"]["birthDate"];
                        foreach (JObject nameObject in nameArray)
                        {
                            JArray givenArray = (JArray)nameObject["given"];
                            string first = (string)givenArray.First;
                            string middle = (string)givenArray.Last;
                            string family = (string)nameObject["family"];

                            //
                        }
                    }
                    else if (resourceType.Equals("Observation"))
                    {
                        string div = (string)aItem["resource"]["text"]["div"];
                        Console.WriteLine("div" + div);
                    }
                    else
                    {
                        Console.WriteLine("Unexpected resource type: " + resourceType);
                    }

                }
                catch (Exception ex)
                {
                    Console.Write(ex);
                }
            }

        }

        private void ParseDataObject2()
        {
            string url = @"https://launch.smarthealthit.org/v/r4/sim/eyJoIjoiMSIsImoiOiIxIiwiZSI6ImU0NDNhYzU4LThlY2UtNDM4NS04ZDU1LTc3NWMxYjhmM2EzNyJ9/fhir/Patient/9da7d8c2-daef-4722-832e-dcf495d13a4e/$everything";
            var webRequest = WebRequest.Create(url);
            string strContent;
            using (var response = webRequest.GetResponse())
            using (var content = response.GetResponseStream())
            using (var reader = new StreamReader(content))
            {
                strContent = reader.ReadToEnd();
            }
            Console.Write(strContent);
            JObject jObject = JObject.Parse(strContent);
            JArray jsonarray = (JArray)jObject["entry"];
            int countPatient = 0;
            int countObservation = 0;
            int countCondition = 0;
            int countMedicationRequest = 0;
            int countProcedure = 0;
            int countImmunization = 0;
            int countDiagnosticReport = 0;
            int countEncounter = 0;
            for (int i = 0; i < jsonarray.Count; i++)
            {
                try
                {
                    JObject aItem = (JObject)jsonarray[i];
                    string resourceType = (string)aItem["resource"]["resourceType"];
                    switch (resourceType)
                    {
                        case "Patient":
                            countPatient++;
                            break;
                        case "Observation":
                            countObservation++;
                            break;
                        case "Condition":
                            countCondition++;
                            break;
                        case "MedicationRequest":
                            countMedicationRequest++;
                            break;
                        case "Procedure":
                            countProcedure++;
                            break;
                        case "Immunization":
                            countImmunization++;
                            break;
                        case "DiagnosticReport":
                            countDiagnosticReport++;
                            break;
                        case "Encounter":
                            countEncounter++;
                            break;
                        default:
                            Console.WriteLine("Unexpected resource type: " + resourceType);
                            break;
                    }
                    /*
                    if (resourceType.Equals("Patient"))
                    {
                        Console.WriteLine("Patient");
                        / *
                        JArray nameArray = (JArray)aItem["resource"]["name"];
                        string gender = (string)aItem["resource"]["gender"];
                        string birthDate = (string)aItem["resource"]["birthDate"];
                        foreach (JObject nameObject in nameArray)
                        {
                            JArray givenArray = (JArray)nameObject["given"];
                            string first = (string)givenArray.First;
                            string middle = (string)givenArray.Last;
                            string family = (string)nameObject["family"];

                            //
                        }
                        * /
                    }
                    else if (resourceType.Equals("Observation"))
                    {
                        Console.WriteLine("Observation");
                        //string div = (string)aItem["resource"]["text"]["div"];
                        //Console.WriteLine("div" + div);
                    }
                    else
                    {
                        Console.WriteLine("Unexpected resource type: " + resourceType);
                    }*/

                }
                catch (Exception ex)
                {
                    Console.Write(ex);
                }
            }
            Console.WriteLine("countPatient = "             + countPatient);
            Console.WriteLine("countObservation = "         + countObservation);
            Console.WriteLine("countCondition = "           + countCondition);
            Console.WriteLine("countMedicationRequest = "   + countMedicationRequest);
            Console.WriteLine("countProcedure = "           + countProcedure);
            Console.WriteLine("countImmunization = "        + countImmunization);
            Console.WriteLine("countDiagnosticReport = "    + countDiagnosticReport);
            Console.WriteLine("countEncounter = "           + countEncounter);
            if(jsonarray.Count != (countPatient + countObservation + countCondition
                 + countMedicationRequest + countProcedure + countImmunization
                 + countDiagnosticReport + countEncounter))
            {
                Console.WriteLine("Unexpected sum: " + jsonarray.Count);
            }

        }
    }
}