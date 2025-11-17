import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function PatientDetails() {
  return (
    <div className="min-h-screen bg-[hsl(291,2%,99%)]">
      {/* App Bar */}
      <header className="bg-white border-b border-[hsl(291,2%,85%)] px-4 py-2 flex items-center gap-2 h-[56px]">
        <div className="flex-1 flex items-center justify-center">
          <div className="h-6 w-[112px] text-[hsl(187,100%,28%)] font-semibold text-xl">
            Gentu
          </div>
        </div>
        
        <div className="flex-1 max-w-[480px]">
          <div className="relative">
            <input 
              type="search" 
              placeholder="Search" 
              className="w-full h-10 px-3 py-1 bg-[hsl(291,2%,95%)] border border-[hsl(291,2%,85%)] rounded-lg text-base"
            />
          </div>
        </div>
        
        <div className="flex-1 flex items-center justify-end gap-2">
          <div className="flex flex-col items-end justify-center h-9">
            <p className="text-sm font-semibold text-[hsl(187,100%,7%)]">Dr Andrew Demo</p>
            <div className="flex items-center gap-1 text-xs text-[hsl(187,100%,7%)]">
              <span>Brisbane Medical Centres</span>
              <span>·</span>
              <span>GTU99999</span>
            </div>
          </div>
          <button className="p-2 rounded-full hover:bg-[hsl(291,2%,95%)]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </button>
          <div className="w-10 h-10 rounded-full bg-[hsl(187,100%,28%)] flex items-center justify-center text-white font-semibold">
            AD
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-56px)]">
        {/* Sidebar */}
        <aside className="w-14 bg-white border-r border-[hsl(291,2%,88%)] flex flex-col items-center justify-between py-4">
          <div className="flex flex-col gap-2">
            <button className="p-4 hover:bg-[hsl(291,2%,95%)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z" />
              </svg>
            </button>
            <button className="p-4 hover:bg-[hsl(291,2%,95%)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              </svg>
            </button>
            <button className="p-4 bg-[hsla(187,100%,28%,0.07)] border-l-2 border-[hsl(187,100%,28%)]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
              </svg>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto bg-[hsl(187,20%,96%)] p-8">
          <div className="max-w-[2000px] mx-auto flex gap-8">
            {/* Left Column */}
            <div className="flex-1 min-w-[672px] flex flex-col gap-8">
              {/* Contact Details */}
              <div className="bg-white border border-[hsl(187,20%,85%)] rounded-lg p-6">
                <h2 className="text-xl font-medium text-[hsl(187,100%,7%)] mb-6">Contact Details</h2>
                
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-[hsl(187,100%,7%)]">Personal</h3>
                  
                  <div className="flex gap-2">
                    <div className="w-[70px]">
                      <Label className="text-xs text-[hsl(187,100%,7%)]">Title</Label>
                      <Input className="h-8 mt-0.5" />
                    </div>
                    <div className="flex-1">
                      <Label className="text-xs text-[hsl(187,100%,7%)]">First name</Label>
                      <Input className="h-8 mt-0.5" />
                    </div>
                    <div className="flex-1">
                      <Label className="text-xs text-[hsl(187,100%,7%)]">Last name *</Label>
                      <Input className="h-8 mt-0.5" />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="flex-1">
                      <Label className="text-xs text-[hsl(187,100%,7%)]">Middle Name</Label>
                      <Input className="h-8 mt-0.5" />
                    </div>
                    <div className="flex-1">
                      <Label className="text-xs text-[hsl(187,100%,7%)]">Preferred Name</Label>
                      <Input className="h-8 mt-0.5" />
                    </div>
                    <div className="flex-1">
                      <Label className="text-xs text-[hsl(187,100%,7%)]">Maiden name</Label>
                      <Input className="h-8 mt-0.5" />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="flex-1">
                      <Label className="text-xs text-[hsl(187,100%,7%)]">DOB</Label>
                      <Input type="date" defaultValue="1964-01-01" className="h-8 mt-0.5" />
                      <p className="text-xs text-[hsl(187,45%,30%)] mt-0.5">60 years</p>
                    </div>
                    <div className="flex-1">
                      <Label className="text-xs text-[hsl(187,100%,7%)]">Gender</Label>
                      <Select>
                        <SelectTrigger className="h-8 mt-0.5">
                          <SelectValue placeholder="Choose an option..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex-1">
                      <Label className="text-xs text-[hsl(187,100%,7%)]">Pronouns</Label>
                      <Select>
                        <SelectTrigger className="h-8 mt-0.5">
                          <SelectValue placeholder="Choose an option..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="he">He/Him</SelectItem>
                          <SelectItem value="she">She/Her</SelectItem>
                          <SelectItem value="they">They/Them</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <h3 className="text-sm font-semibold text-[hsl(187,100%,7%)]">Contact</h3>
                  
                  <div className="flex gap-2 items-end">
                    <div className="flex-1">
                      <Label className="text-xs text-[hsl(187,100%,7%)]">Mobile phone</Label>
                      <Input defaultValue="0400 000 000" className="h-8 mt-0.5" />
                    </div>
                    <div className="flex items-center gap-2 pb-2">
                      <div className="flex items-center gap-1">
                        <Checkbox id="no-sms" />
                        <Label htmlFor="no-sms" className="text-sm cursor-pointer">Do not SMS</Label>
                      </div>
                      <Button variant="secondary" size="sm" className="h-8">SMS</Button>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="flex-1">
                      <Label className="text-xs text-[hsl(187,100%,7%)]">Home phone</Label>
                      <Input className="h-8 mt-0.5" />
                    </div>
                    <div className="flex-1">
                      <Label className="text-xs text-[hsl(187,100%,7%)]">Work phone</Label>
                      <Input className="h-8 mt-0.5" />
                    </div>
                  </div>

                  <div className="flex gap-2 items-end">
                    <div className="flex-1">
                      <Label className="text-xs text-[hsl(187,100%,7%)]">Email</Label>
                      <Input type="email" className="h-8 mt-0.5" />
                    </div>
                    <div className="flex items-center gap-2 pb-2 opacity-80">
                      <div className="flex items-center gap-1">
                        <Checkbox id="no-email" />
                        <Label htmlFor="no-email" className="text-sm cursor-pointer">Do not Email</Label>
                      </div>
                      <Button variant="secondary" size="sm" className="h-8">EMAIL</Button>
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <h3 className="text-sm font-semibold text-[hsl(187,100%,7%)]">Clinical</h3>
                  <Button variant="secondary" size="sm">Attachment Password</Button>
                  <div>
                    <Label className="text-xs text-[hsl(187,100%,7%)]">Chart Number</Label>
                    <Input className="h-8 mt-0.5" />
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white border border-[hsl(187,20%,85%)] rounded-lg p-6">
                <h2 className="text-xl font-medium text-[hsl(187,100%,7%)] mb-6">Address</h2>
                
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-[hsl(187,100%,7%)]">Residential address</h3>
                  
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <Label className="text-xs text-[hsl(187,100%,7%)]">Street 1</Label>
                      <Input className="h-8 mt-0.5" />
                    </div>
                    <div className="flex-1">
                      <Label className="text-xs text-[hsl(187,100%,7%)]">Street 2</Label>
                      <Input className="h-8 mt-0.5" />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="flex-1">
                      <Label className="text-xs text-[hsl(187,100%,7%)]">Suburb</Label>
                      <Input className="h-8 mt-0.5" />
                    </div>
                    <div className="flex-1">
                      <Label className="text-xs text-[hsl(187,100%,7%)]">State</Label>
                      <Select>
                        <SelectTrigger className="h-8 mt-0.5">
                          <SelectValue placeholder="Choose an option..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nsw">NSW</SelectItem>
                          <SelectItem value="vic">VIC</SelectItem>
                          <SelectItem value="qld">QLD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex-1">
                      <Label className="text-xs text-[hsl(187,100%,7%)]">Postcode</Label>
                      <Input className="h-8 mt-0.5" />
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <Checkbox id="use-postal" />
                    <Label htmlFor="use-postal" className="text-sm cursor-pointer">Use as postal</Label>
                  </div>
                </div>
              </div>

              {/* Third Party Claims */}
              <div className="bg-white border border-[hsl(187,20%,85%)] rounded-lg p-6">
                <h2 className="text-xl font-medium text-[hsl(187,100%,7%)] mb-6">Third Party Claims</h2>
                
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-[hsl(187,20%,85%)]">
                      <th className="text-left p-2 text-sm font-semibold text-[hsl(187,45%,30%)]">Insurer</th>
                      <th className="text-left p-2 text-sm font-semibold text-[hsl(187,45%,30%)]">Claim Number</th>
                      <th className="text-left p-2 text-sm font-semibold text-[hsl(187,45%,30%)]">Injury</th>
                      <th className="text-left p-2 text-sm font-semibold text-[hsl(187,45%,30%)]">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[hsl(187,20%,85%)]">
                      <td className="p-2 text-sm">Business Name</td>
                      <td className="p-2 text-sm">421564215634</td>
                      <td className="p-2 text-sm">Broken leg</td>
                      <td className="p-2 text-sm">Active</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* General */}
              <div className="bg-white border border-[hsl(187,20%,85%)] rounded-lg p-6">
                <h2 className="text-xl font-medium text-[hsl(187,100%,7%)] mb-6">General</h2>
                
                <div className="space-y-6">
                  <div>
                    <Label className="text-xs text-[hsl(187,100%,7%)]">Occupation</Label>
                    <Input defaultValue="Text" className="h-8 mt-0.5" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-[hsl(187,100%,7%)]">Indigenous status</h3>
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1">
                        <Checkbox id="aboriginal" />
                        <Label htmlFor="aboriginal" className="text-sm cursor-pointer">Aboriginal</Label>
                      </div>
                      <div className="flex items-center gap-1">
                        <Checkbox id="torres" />
                        <Label htmlFor="torres" className="text-sm cursor-pointer">Torres Strait Islander</Label>
                      </div>
                      <div className="flex items-center gap-1">
                        <Checkbox id="neither" />
                        <Label htmlFor="neither" className="text-sm cursor-pointer">Neither</Label>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-[hsl(187,100%,7%)]">Deceased / Inactive</h3>
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1">
                        <Checkbox id="inactive" />
                        <Label htmlFor="inactive" className="text-sm cursor-pointer">Inactive (do not contact)</Label>
                      </div>
                      <div className="flex items-center gap-1">
                        <Checkbox id="deceased" />
                        <Label htmlFor="deceased" className="text-sm cursor-pointer">Deceased</Label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label className="text-xs text-[hsl(187,100%,7%)]">DOD</Label>
                    <Input type="date" defaultValue="2022-02-13" className="h-8 mt-0.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex-1 min-w-[672px] flex flex-col gap-8">
              {/* Account Holders */}
              <div className="bg-white border border-[hsl(187,20%,85%)] rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-medium text-[hsl(187,100%,7%)]">Account Holders</h2>
                  <Button variant="secondary" size="sm">+ Add account holder</Button>
                </div>
                
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-[hsl(187,20%,85%)]">
                      <th className="text-left p-2 text-sm font-semibold text-[hsl(187,45%,30%)]">Name</th>
                      <th className="text-left p-2 text-sm font-semibold text-[hsl(187,45%,30%)]">Primary Account Holder</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[hsl(187,20%,85%)]">
                      <td className="p-2 text-sm">Steve Rogers</td>
                      <td className="p-2 text-sm"></td>
                    </tr>
                    <tr className="border-b border-[hsl(187,20%,85%)]">
                      <td className="p-2 text-sm">Carol Danvers</td>
                      <td className="p-2 text-sm"></td>
                    </tr>
                    <tr className="border-b border-[hsl(187,20%,85%)]">
                      <td className="p-2 text-sm">Tony Stark</td>
                      <td className="p-2 text-sm"></td>
                    </tr>
                    <tr className="border-b border-[hsl(187,20%,85%)]">
                      <td className="p-2 text-sm">Wanda Maximoff</td>
                      <td className="p-2 text-sm text-center">✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Referrals */}
              <div className="bg-white border border-[hsl(187,20%,85%)] rounded-lg p-6">
                <h2 className="text-xl font-medium text-[hsl(187,100%,7%)] mb-6">Referrals</h2>
                
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-[hsl(187,20%,85%)]">
                      <th className="text-left p-2 text-sm font-semibold text-[hsl(187,45%,30%)]">Referrer</th>
                      <th className="text-left p-2 text-sm font-semibold text-[hsl(187,45%,30%)]">Expires</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[hsl(187,20%,85%)]">
                      <td className="p-2 text-sm">Captain America</td>
                      <td className="p-2 text-sm">Start date unknown</td>
                    </tr>
                    <tr className="border-b border-[hsl(187,20%,85%)]">
                      <td className="p-2 text-sm">Captain Marvel</td>
                      <td className="p-2 text-sm">04/12/2024</td>
                    </tr>
                    <tr className="border-b border-[hsl(187,20%,85%)]">
                      <td className="p-2 text-sm">Iron Man</td>
                      <td className="p-2 text-sm">Expired</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Current Provider */}
              <div className="bg-white border border-[hsl(187,20%,85%)] rounded-lg p-6">
                <h2 className="text-xl font-medium text-[hsl(187,100%,7%)] mb-6">Current Provider</h2>
                <div>
                  <Label className="text-xs text-[hsl(187,100%,7%)]">Select Provider</Label>
                  <Select>
                    <SelectTrigger className="h-8 mt-0.5">
                      <SelectValue placeholder="Choose an option..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="provider1">Provider 1</SelectItem>
                      <SelectItem value="provider2">Provider 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Health Team Members */}
              <div className="bg-white border border-[hsl(187,20%,85%)] rounded-lg p-6">
                <h2 className="text-xl font-medium text-[hsl(187,100%,7%)] mb-6">Health Team Members</h2>
                
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-[hsl(187,20%,85%)]">
                      <th className="text-left p-2 text-sm font-semibold text-[hsl(187,45%,30%)]">Contact</th>
                      <th className="text-left p-2 text-sm font-semibold text-[hsl(187,45%,30%)]">Speciality</th>
                      <th className="text-left p-2 text-sm font-semibold text-[hsl(187,45%,30%)]">Nominated GP</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[hsl(187,20%,85%)]">
                      <td className="p-2 text-sm">Dr Stephen Strange</td>
                      <td className="p-2 text-sm">Dermatologist</td>
                      <td className="p-2 text-sm"></td>
                    </tr>
                    <tr className="border-b border-[hsl(187,20%,85%)]">
                      <td className="p-2 text-sm">Dr Moira MacTaggert</td>
                      <td className="p-2 text-sm">Orthopaedic Surgeon</td>
                      <td className="p-2 text-sm"></td>
                    </tr>
                    <tr className="border-b border-[hsl(187,20%,85%)]">
                      <td className="p-2 text-sm">Dr Henry McCoy</td>
                      <td className="p-2 text-sm">Gynaecologist</td>
                      <td className="p-2 text-sm text-center">✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Emergency Contacts */}
              <div className="bg-white border border-[hsl(187,20%,85%)] rounded-lg p-6">
                <h2 className="text-xl font-medium text-[hsl(187,100%,7%)] mb-6">Emergency Contacts</h2>
                
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-[hsl(187,20%,85%)]">
                      <th className="text-left p-2 text-sm font-semibold text-[hsl(187,45%,30%)]">Name</th>
                      <th className="text-left p-2 text-sm font-semibold text-[hsl(187,45%,30%)]">Phone</th>
                      <th className="text-left p-2 text-sm font-semibold text-[hsl(187,45%,30%)]">Relationship</th>
                      <th className="text-left p-2 text-sm font-semibold text-[hsl(187,45%,30%)]">Next of kin</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[hsl(187,20%,85%)]">
                      <td className="p-2 text-sm">Ben Parker</td>
                      <td className="p-2 text-sm">0400 321 321</td>
                      <td className="p-2 text-sm">Uncle</td>
                      <td className="p-2 text-sm"></td>
                    </tr>
                    <tr className="border-b border-[hsl(187,20%,85%)]">
                      <td className="p-2 text-sm">May Reilly Parker-Jameson</td>
                      <td className="p-2 text-sm">0400 123 123</td>
                      <td className="p-2 text-sm">Aunt</td>
                      <td className="p-2 text-sm text-center">✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
